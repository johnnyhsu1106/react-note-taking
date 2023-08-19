import { Outlet, useOutletContext, useParams } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';
import { useNotesContext } from './NotesContext';


const NoteContext = () => {
  const { notesWithTags } = useNotesContext();
  const { id } = useParams();

  const targetNote = notesWithTags.find((noteWithTags) => {
    return noteWithTags.id === id;
  });

  if (!targetNote) {
    return <NotFoundPage />
  }

  return <Outlet context={targetNote} />
}

const useNote = () => {
  return useOutletContext();
};

export { useNote, NoteContext };

