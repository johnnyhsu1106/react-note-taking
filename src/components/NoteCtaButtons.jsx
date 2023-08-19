import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useNote } from '../context/NoteContext';

const NoteCtaButtons = ({
  onDeleteNote
}) => {
  const navigate = useNavigate();
  const { id } = useNote();  
  
  return (
    <>
      <Link to={`/${id}/edit`}>
        <Button variant='outline-dark'>Edit</Button>
      </Link>

      <Button       
        variant='outline-danger'
        onClick={() => {
          onDeleteNote(id)
          navigate('/')
        }}
      >
        Delete
      </Button>

      <Link to='/'>
        <Button variant='outline-secondary'>Back</Button>
      </Link>
    </>
  )
}

export default NoteCtaButtons;
