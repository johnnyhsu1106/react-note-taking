import { useId } from 'react';
import { Form } from 'react-bootstrap';

const EditTagInput = ({
  id,
  label,
  onUpdateTag
}) => {
  
  const divId = useId();
  return (
    <Form.Group controlId={`${divId}-tag`}>
      <Form.Label hidden>Tag</Form.Label>
      <Form.Control
        type='text'
        value={label}
        onChange={(e) => { onUpdateTag(id, e.target.value) } }
      />
    </Form.Group>
  )
}

export default EditTagInput;
