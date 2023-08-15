import { Link, useNavigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown';
import { Row, Col, Stack, Button } from 'react-bootstrap';

import { useNote } from './NoteLayout';
import { TagList } from './TagList';

const Note = ({
  onDeleteNote
}) => {
  const note = useNote();
  console.log('note: ', note);
  const navigate = useNavigate()
  const {
    id,
    title,
    markdown, 
    tags
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

export { Note };