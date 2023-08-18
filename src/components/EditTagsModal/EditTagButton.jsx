import { Button } from 'react-bootstrap'


const EditTagButton = ({
  id,
  onDeleteTag
}) => {
  return (
    <Button
      onClick={() =>{ onDeleteTag(id) }}
      variant='outline-danger'
    >
      &times;
    </Button>
  )
}

export default EditTagButton;
