import { Row, Col } from 'react-bootstrap';
import NoteCard from './NoteCard';


const NoteCardList = ({
  filteredNotes
}) => {

  return (
    <Row xs={1} sm={2} lg={3} xl={4} className='g-3'>
      { filteredNotes.map((filteredNote) => {
        return (
          <Col key={filteredNote.id}>
            <NoteCard
              {...filteredNote}
            />
          </Col>
        )
      })}
    </Row>
  )
}

export default NoteCardList;
