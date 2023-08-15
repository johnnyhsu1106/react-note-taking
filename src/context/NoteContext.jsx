import { Navigate, Outlet, useOutletContext, useParams } from 'react-router-dom';

const NoteContext = ({
  notes
}) => {

  const { id } = useParams();
  const targetNote = notes.find((note) => {
    return note.id === id;
  });

  if (!targetNote) {
    return <Navigate to='/' replace />;
  }

  return <Outlet context={targetNote} />
}

const useNote = () => {
  return useOutletContext();
};

export { useNote, NoteContext };

