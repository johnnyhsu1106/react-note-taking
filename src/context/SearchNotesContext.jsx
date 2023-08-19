import { createContext, useContext, useState, useMemo } from 'react';
import { useNotesContext } from './NotesContext';


const SearchNotesContext = createContext();
const useSearchNotesContext = () => {
  return useContext(SearchNotesContext);
};

const SearchNotesProvider = ({ children }) => {
  const [title, setTitle] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const { notesWithTags } = useNotesContext();

  const filteredNotes = useMemo(() => {
    return notesWithTags.filter((noteWithTags) => {
      if (title.trim() === '' && selectedTags.length === 0) {
        return []
      }

      return (
        noteWithTags.title.toLowerCase().includes(title.toLowerCase()) &&
          selectedTags.every((selectedTag) => {
            return noteWithTags.tags.some((noteTag) => {
              return noteTag.id === selectedTag.id 
          })
        })
      )
    })
  }, [title, selectedTags, notesWithTags]);


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

  const value = {
    title,
    selectedTags,
    filteredNotes,
    handleTitleSearch,
    handleTagsSearch
  };

  return (
    <SearchNotesProvider value={value}>
      {children}
    </SearchNotesProvider> 
  )
}

export { useSearchNotesContext, SearchNotesProvider };