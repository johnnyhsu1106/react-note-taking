import { useState, useMemo } from 'react';
import { Row, Col, Stack, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SearchNotesForm from '../components/SearchNotesForm/SearchNotesForm';
import NoteCardList from '../components/NoteCardList/NoteCardList';
import EditTagsModal from '../components/EditTagsModal/EditTagsModal';


const HomePage = ({
  availableTags,
  notes,
  onUpdateTag,
  onDeleteTag
}) => {

  const [title, setTitle] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
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


  const handleTitleSearch = (title) => {
    setTitle(title);
  };

  const handleTagsSearch = (tags) => {
    setSelectedTags(
      tags.map((tag) => {
        return { 
          id: tag.value,
          label: tag.label 
        }
      })
    );
  };


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

      <SearchNotesForm
        availableTags={availableTags}
        title={title}
        selectedTags={selectedTags}
        onSearchTitle={handleTitleSearch}
        onSearchTags={handleTagsSearch}
      />
   
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
