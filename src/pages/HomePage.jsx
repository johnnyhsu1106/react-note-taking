import { useState, useMemo } from 'react';
import { Row, Col, Stack, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactSelect from 'react-select';

import NoteCardList from '../components/NoteCardList/NoteCardList';
import EditTagsModal from '../components/EditTagsModal/EditTagsModal';


const HomePage = ({
  availableTags,
  notes,
  onUpdateTag,
  onDeleteTag
}) => {

  const [selectedTags, setSelectedTags] = useState([]);
  const [title, setTitle] = useState('');
  const [isEditTagsModalOpen, setIsEditTagsModalOpen] = useState(false);

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
        <Col><h1>Note...</h1></Col>

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
        <Row className='mb-4'>
          <Col>
            <Form.Group controlId='title'>
              <Form.Control
                type='text'
                value={title}
                placeholder='Search title by keyword'
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


      <NoteCardList filteredNotes={filteredNotes} />

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

export default HomePage;
