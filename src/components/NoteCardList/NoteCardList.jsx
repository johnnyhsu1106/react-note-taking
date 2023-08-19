import { Row, Col } from 'react-bootstrap';
import NoteCard from './NoteCard';


const NoteCardList = ({
  filteredNotes
}) => {

  return (
    <Row xs={1} sm={2} lg={3} xl={4} className='g-3'>
      { filteredNotes.map((filteredNote) => {
        const { 
          id , 
          title, 
          tags 
        } = filteredNote;
        
        return (
          <Col key={id}>
            <NoteCard
              id={id}
              title={title}
              tags={tags} 
            />
          </Col>
        )
      })}
    </Row>
  )
}

export default NoteCardList;
