import NoteForm from '../components/NoteForm/NoteForm';
import { useNotesContext } from '../context/NotesContext';


const CreateNotePage = () => {
  const { handleNoteCreate } = useNotesContext();

  return (
    <>
      <h1 className="mb-4">New Note</h1>
      <NoteForm
        onSubmitForm={handleNoteCreate}
      />
    </>
  )
}

export default CreateNotePage;
