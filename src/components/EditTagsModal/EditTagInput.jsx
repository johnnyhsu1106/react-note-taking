import { Form } from 'react-bootstrap';

const EditTagInput = ({
  id,
  label,
  onUpdateTag
}) => {
  return (
    <Form.Control
      type='text'
      value={label}
      onChange={(e) => { onUpdateTag(id, e.target.value) } }
    />
  )
}

export default EditTagInput;
