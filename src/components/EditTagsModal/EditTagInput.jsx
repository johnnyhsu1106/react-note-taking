import { useId } from 'react';
import { Form } from 'react-bootstrap';
import { useNotesContext } from '../../context/NotesContext';


const EditTagInput = ({
  id,
  label
}) => {
  const { handleTagUpdate } = useNotesContext();
  const divId = useId();

  return (
    <Form.Group controlId={`${divId}-tag`}>
      <Form.Label hidden>Tag</Form.Label>
      <Form.Control
        type='text'
        value={label}
        onChange={(e) => { handleTagUpdate(id, e.target.value) } }
      />
    </Form.Group>
  )
}

export default EditTagInput;
