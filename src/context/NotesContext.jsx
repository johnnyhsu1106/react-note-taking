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

  
  const value = {
    notesWithTags,
    tags: tags,
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
