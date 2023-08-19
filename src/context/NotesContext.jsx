import { createContext, useContext, useMemo } from 'react'
import { v4 as uuidV4 } from 'uuid'
import useLocalStorage from '../hooks/useLocalStorage';


const NotesContext = createContext();
const useNotesContext = () => {
  return useContext(NotesContext);
};

const NotesProvider = ({children} ) => {
  // notes format: [{ id, title, markdown, tagIds:: [...] }, ...]
  // tags format: [{ id, label }, ...]
  // notesWithTags format:  [{ id, title, markdown, tags: [{ id: tagId, label }] }, ...]

  const [notes, setNotes] = useLocalStorage('NOTES', []);
  const [availableTags, setAvailableTags] = useLocalStorage('TAGS', []);
  
  const notesWithTags = useMemo(() => {
    return notes.map((note) => {
      return { 
        ...note, 
        tags: availableTags.filter((availableTag) => { return note.tagIds.includes(availableTag.id)} )
      }
    })
  }, [notes, availableTags]);

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
    setAvailableTags((prevTag) => {
      return [...prevTag, newTag];
    })
  };

  const handleTagUpdate = (id, label) => {
    setAvailableTags((prevTags) => {
      return prevTags.map((prevTag) => {
        return prevTag.id === id ? {...prevTag, label } : prevTag;
      });
    })
  };

  const handleTagDelete = (tagId) => {
    setAvailableTags((prevTags) => {
      return prevTags.filter((prevTag) => {
        return prevTag.id !== tagId;
      })
    })
  };

  
  const value = {
    notesWithTags,
    availableTags,
    handleNoteCreate,
    handleNoteUpdate,
    handleNoteDelete,
    handleTagAdd,
    handleTagUpdate,
    handleTagDelete
  };

  return (
    <NotesContext.Provider value={value}>
      {children}    
    </NotesContext.Provider>
  )
};

export { useNotesContext, NotesProvider };
