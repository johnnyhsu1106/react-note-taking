import { Form } from 'react-bootstrap';

const EditTagInput = ({
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
