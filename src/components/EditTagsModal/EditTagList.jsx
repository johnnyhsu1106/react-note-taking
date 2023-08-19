import { Row, Col } from 'react-bootstrap';
import EditTagInput from './EditTagInput';
import EditTagButton from './EditTagButton';
import { useNotesContext } from '../../context/NotesContext';


const EditTagList = () => {
  const { tags } = useNotesContext();

  return (
    tags.map((availableTag) => {
      const { id, label } = availableTag;
      return (
        <Row key={id}>
          <Col>
            <EditTagInput 
              id={id}
              label={label}
            />
          </Col>

          <Col xs='auto'>
            <EditTagButton id={id} />
          </Col>
        </Row>
        )
      }
    )
  )
}

export default EditTagList;
