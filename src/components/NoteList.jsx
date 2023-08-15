import { useState, useMemo } from 'react';
import { Row, Col, Stack, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import ReactSelect from 'react-select';

import { NoteCard } from './NoteCard';
import { EditTagsModal } from './EditTagsModal';

const NoteList = ({
  availableTags,
  notes,
  onUpdateTag,
  onDeleteTag
}) => {

  const [selectedTags, setSelectedTags] = useState([]);
  const [title, setTitle] = useState('');
  const [isEditTagsModalOpen, setIsEditTagsModalOpen] = useState(false);

  // const navigate = useNavigate();

  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      if (title.trim() === '' && selectedTags.length === 0) {
        return []
      }

      return (
        note.title.toLowerCase().includes(title.toLowerCase()) &&
          selectedTags.every((selectedTag) => {
            return note.tags.some((noteTag) => {
              return noteTag.id === selectedTag.id 
          })
        })
      )
    })
  }, [title, selectedTags, notes]);

  return (
    <>
      <Row className='align-items-center mb-4'>
        <Col><h1>Notes</h1></Col>

        <Col xs='auto'>
          <Stack 
            direction='horizontal'
            gap={2} 
          >
            <Link to='/new'>
              <Button variant='outline-dark'>Create</Button>
            </Link>
            <Button 
              variant='outline-secondary'
              onClick={() => {setIsEditTagsModalOpen(true)}}
            >
              Edit Tags
            </Button>
          </Stack>
        </Col>
      </Row>

      <Form>
        <Row className='mb-4'></Row>
          <Col>

          </Col>
        <Row className='mb-4'>
          <Col>
            <Form.Group controlId='title'>
              <Form.Control
                type='text'
                value={title}
                placeholder='Search by keyword'
                onChange={(e) => {setTitle(e.target.value)}}
              />
            </Form.Group>
          </Col>
          
          <Col>
            <Form.Group controlId='tags'>
              <ReactSelect
                isMulti
                placeholder='Search by tags'
                value={selectedTags.map((selectedTag) => {
                  return { label: selectedTag.label, value: selectedTag.id }
                })}
                
                options={availableTags.map((availableTag) => {
                  return { label: availableTag.label, value: availableTag.id }
                })}

                onChange={(selectedTags) => {
                  setSelectedTags(
                    selectedTags.map((selectedTag) => {
                      return { 
                        id: selectedTag.value,
                        label: selectedTag.label 
                      }
                    })
                  )
                }}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>

      <Row xs={1} sm={2} lg={3} xl={4} className='g-3'>
        { filteredNotes.map((filteredNote) => {
          const { id , title, tags } = filteredNote;
          return (
            <Col key={id}>
              <NoteCard
                id={id}
                title={title}
                tags={tags} 
              />
            </Col>
          )
        })}
      </Row>

      <EditTagsModal
        availableTags={availableTags}
        isModalOpen={isEditTagsModalOpen}
        onUpdateTag={onUpdateTag}
        onDeleteTag={onDeleteTag}
        onCloseModal={() => setIsEditTagsModalOpen(false)}
      />
    </>
  )
}

export { NoteList };
