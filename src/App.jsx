import { useMemo } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'

import HomePage from './pages/Homepage';
import NotesPage from './pages/NotesPage';
import CreateNotePage from './pages/CreateNotePage';
import EditNotePage from './pages/EditNotePage';

import { NoteContext } from './context/NoteContext';
import useLocalStorage from './hooks/useLocalStorage';

import './App.css'


function App() {
  // notes format: [{ id, title, markdown, tagIds:: [...] }, ...]
  // tags format: [{ id, label }, ...]
  // notesWithTags format:  [{ id, title, markdown, tags: [{ id: tagId, label: label }] }, ...]
  const [notes, setNotes] = useLocalStorage('NOTES', []);
  const [tags, setTags] = useLocalStorage('TAGS', []);
  
  const notesWithTags = useMemo(() => {
    return notes.map((note) => {
      return { 
        ...note, 
        tags: tags.filter((tag) => { return note.tagIds.includes(tag.id)} )
      }
    })
  }, [notes, tags]);


  const handleNoteCreate = ({tags, ...data}) => {
    setNotes((prevNotes) => {
      return [
        ...prevNotes, 
        { ...data, id: uuidV4(), tagIds: tags.map((tag) => {return tag.id}) }
      ]
    });
  };

  const handleNoteUpdate = (noteId, {tags, ...data}) => {
    setNotes((prevNotes) => {
      return prevNotes.map((prevNote) => {
        return prevNote.id === noteId ? {...prevNote, ...data, tagIds: tags.map((tag) => tag.id)} : prevNote;
      })
    })
  };

  const handleNoteDelete = (noteId) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((prevNote) => {
        return prevNote.id !== noteId;
      });
    })
  };

  const handleTagAdd = (newTag) => {
    setTags((prevTag) => {
      return [...prevTag, newTag];
    })
  };

  const handleTagUpdate = (id, label) => {
    setTags((prevTags) => {
      return prevTags.map((prevTag) => {
        return prevTag.id === id ? {...prevTag, label } : prevTag;
      });
    })
  };

  const handleTagDelete = (tagId) => {
    setTags((prevTags) => {
      return prevTags.filter((prevTag) => {
        return prevTag.id !== tagId;
      })
    })
  };

  const handleTagSelect = (tag) => {
    
  }


  return (
    <Container className='my-4'>
      <Routes>
        <Route 
          path='/' 
          element={
            <HomePage
              onUpdateTag={handleTagUpdate}
              onDeleteTag={handleTagDelete}
              availableTags={tags} 
              notes={notesWithTags} 
            />
          } 
        />
        <Route 
          path='/new' 
          element={
            <CreateNotePage
              availableTags={tags} 
              onCreateNote={handleNoteCreate} 
              onAddNewTag={handleTagAdd} 
            />
          } 
        />

        <Route path='/:id' element={<NoteContext notes={notesWithTags} />} >
          <Route 
            index 
            element={<NotesPage onDeleteNote={handleNoteDelete} />} 
          />
          
          <Route 
            path='edit' 
            element={
              <EditNotePage
                availableTags={tags} 
                onUpdateNote={handleNoteUpdate} 
                onAddNewTag={handleTagAdd}   
              />
            } 
          />
        </Route>

        <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    </Container>

  )
}

export default App;
