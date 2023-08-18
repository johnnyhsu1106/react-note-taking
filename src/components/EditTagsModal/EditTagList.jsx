import { Row, Col } from 'react-bootstrap';
import EditTagInput from './EditTagInput';
import EditTagButton from './EditTagButton';

const EditTagList = ({
  availableTags,
  onUpdateTag,
  onDeleteTag
}) => {

  return (
    availableTags.map((availableTag) => {
      const { id, label } = availableTag;
      return (
        <Row key={id}>
          <Col>
            <EditTagInput 
              label={label}
              onUpdateTag={onUpdateTag}
            />
          </Col>

          <Col xs='auto'>
            <EditTagButton
              id={id}
              onDeleteTag={onDeleteTag}
            />
          </Col>
        </Row>
        )
      }
    )
  )
}

export default EditTagList;
