import { NoteForm } from './NoteForm';

const NewNote = ({
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

export { NewNote };
