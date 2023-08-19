import NoteForm from '../components/NoteForm/NoteForm';
import { useNote } from '../context/NoteContext';
import { useNotesContext } from '../context/NotesContext';


const EditNotePage = () => {
  const { handleNoteUpdate } = useNotesContext();
  const note = useNote();
  const { id } = note;

  return (
    <>
      <h1 className="mb-4">Edit Note</h1>
      <NoteForm
        {...note}
        onSubmitForm={(noteData) => handleNoteUpdate(id, noteData)}
      />
    </>
  )
}

export default EditNotePage;
