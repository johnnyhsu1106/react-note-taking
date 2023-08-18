import ReactMarkdown from 'react-markdown';
import { Row, Col, Stack } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import TagList from '../components/TagList/TagList';

import { useNote } from '../context/NoteContext';


const NotesPage = ({
  onDeleteNote
}) => {
  
  const note = useNote();
  const navigate = useNavigate();
  const {id} = note;
  
  const {
    title,
    tags,
    markdown, 
  } = note;

  return (
    <>
      <Row className='align-items-center mb-4'>
        <Col>
          <h1>{title}</h1>
          <TagList tags={tags} /> 
        </Col>

        <Col xs='auto'>
          <Stack 
            gap={2} 
            direction='horizontal'
          >
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
        
          </Stack>
        </Col>
      </Row>
  
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </>
  )
}

export default NotesPage;