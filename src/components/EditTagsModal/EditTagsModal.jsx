import { Modal, Stack, Row, Col, Form, Button } from 'react-bootstrap';
import EditTagList from './EditTagList';


const EditTagsModal = ({
  isModalOpen,
  availableTags,
  onUpdateTag,
  onDeleteTag,
  onCloseModal
}) => {
  
  return (  
    <Modal 
      show={isModalOpen} 
      onHide={onCloseModal}
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit Tags</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Stack gap={2}>
            <EditTagList
              availableTags={availableTags}
              onUpdateTag={onUpdateTag}
              onDeleteTag={onDeleteTag} 
            />
          </Stack>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default EditTagsModal; 