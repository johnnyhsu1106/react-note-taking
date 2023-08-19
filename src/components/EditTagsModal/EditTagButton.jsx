import { Button } from 'react-bootstrap'
import { useNotesContext } from '../../context/NotesContext'


const EditTagButton = ({ id }) => {
  const { handleTagDelete } = useNotesContext();

  return (
    <Button
      onClick={() =>{ handleTagDelete(id) }}
      variant='outline-danger'
    >
      &times;
    </Button>
  )
}

export default EditTagButton;
