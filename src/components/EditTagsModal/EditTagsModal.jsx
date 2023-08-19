import { Modal, Stack, Form } from 'react-bootstrap';
import EditTagList from './EditTagList';


const EditTagsModal = ({
  isModalOpen,
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
            />
          </Stack>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default EditTagsModal; 