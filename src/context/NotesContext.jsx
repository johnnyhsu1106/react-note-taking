import { createContext, useContext, useMemo } from 'react'
import { v4 as uuidV4 } from 'uuid'
import useLocalStorage from '../hooks/useLocalStorage';


const NotesContext = createContext();
const useNotesContext = () => {
  return useContext(NotesContext);
};

const NotesProvider = ({children} ) => {
  // notes format: [{ id, title, markdown, tagIds: [...] }, ...]
  // tags format: [{ id, label }, ...]
  // notesWithTags format:  [{ id, title, markdown, tagIds, tags: [{ id: tagId, label }] }, ...]

  const [notes, setNotes] = useLocalStorage('NOTES', []);
  const [availableTags, setAvailableTags] = useLocalStorage('AVAILABLE_TAGS', []);
  
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
        { ...data, id: uuidV4(), tagIds: tags.map((tag) => {return tag.id}) } // extract tag.id from tag
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
    setAvailableTags((prevAvailableTags) => {
      return [...prevAvailableTags, newTag];
    })
  };

  const handleTagUpdate = (tagId, label) => {
    setAvailableTags((prevAvailableTags) => {
      return prevAvailableTags.map((prevAvailableTag) => {
        return prevAvailableTag.id === tagId ? {...prevAvailableTag, label } : prevAvailableTag;
      });
    })
  };

  const handleTagDelete = (tagId) => {
    setAvailableTags((prevAvailableTags) => {
      return prevAvailableTags.filter((prevAvailableTag) => {
        return prevAvailableTag.id !== tagId;
      })
    })
  };

  const noteValue = {
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
    <NotesContext.Provider value={noteValue}>
      {children}    
    </NotesContext.Provider>
  )
};

export { useNotesContext, NotesProvider };
