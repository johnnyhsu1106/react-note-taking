import NoteForm from '../components/share/NoteForm/NoteForm';

const CreateNotePage = ({
  availableTags,
  onCreateNote,
  onAddNewTag
}) => {

  return (
    <>
      <h1 className="mb-4">New Note</h1>
      <NoteForm
        onSubmitForm={onCreateNote}
        onAddNewTag={onAddNewTag}
        availableTags={availableTags}
      />
    </>
  )
}

export default CreateNotePage;
