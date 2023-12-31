import { Row, Col } from 'react-bootstrap';
import EditTagInput from './EditTagInput';
import EditTagButton from './EditTagButton';
import { useNotesContext } from '../../context/NotesContext';


const EditTagList = () => {
  const { availableTags } = useNotesContext();

  return (
    availableTags.map((availableTag) => {
      const { id } = availableTag;
      return (
        <Row key={id}>
          <Col>
            <EditTagInput 
              {...availableTag}
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
