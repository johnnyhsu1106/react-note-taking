import { NoteForm } from './NoteForm';
import { useNote } from './NoteLayout';

const EditNote = ({
  availableTags,
  onUpdateNote,
  onAddNewTag
}) => {

  const note = useNote();
  const { id } = note;
  return (
    <>
      <h1 className="mb-4">Edit Note</h1>
      <NoteForm
        {...note}
        onSubmitForm={(noteData) => onUpdateNote(id, noteData)}
        onAddNewTag={onAddNewTag}
        availableTags={availableTags}
      />
    </>
  )
}

export { EditNote };
