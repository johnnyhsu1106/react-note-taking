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
            {/* { availableTags.map((availableTag) => {
              const { id, label } = availableTag;
              return (
                <Row key={id}>
                  <Col>
                    <Form.Control
                      type='text'
                      value={label}
                      onChange={(e) => { onUpdateTag(id, e.target.value) } }
                    />
                  </Col>

                  <Col xs='auto'>
                    <Button
                      onClick={() =>{ onDeleteTag(id) }}
                      variant='outline-danger'
                    >
                      &times;
                    </Button>
                  </Col>
                </Row>
                )
              }
            )} */}
          </Stack>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default EditTagsModal; 