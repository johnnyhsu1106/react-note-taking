import { useId, useRef, useState } from 'react';
import { Form, Stack, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid'
import NoteFormSelect from './NoteFormSelect';
import CtaButtons from './CtaButtons';
import { useNotesContext } from '../../context/NotesContext';

const NoteForm = ({
  onSubmitForm,
  title = '',
  markdown = '',
  tags = []
}) => {
  // tags = [{id, label}, ...]
  const [selectedTags, setSelectedTags] = useState(tags);
  const titleRef = useRef(null);
  const markdownRef = useRef(null);
  const navigate = useNavigate();
  const divId = useId();  

  const { handleTagAdd } = useNotesContext();

  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    onSubmitForm({
      title: titleRef.current.value,
      markdown: markdownRef.current.value,
      tags: selectedTags
    });

    navigate('..');
  };

  const handleTagsSelect = (tags) => {
    setSelectedTags(
      tags.map((tag) => {
        return { 
          id: tag.value,
          label: tag.label
        }
      })
    )
  };

  const handleTagsCreate = (label) => {
    const newTag = { id: uuidV4(), label};
    handleTagAdd(newTag);
    setSelectedTags((prevTags) => {
      return [...prevTags, newTag];
    })
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId={`${divId}-title`}>
              <Form.Label hidden>Title</Form.Label>
              <Form.Control
                placeholder='Title...'
                defaultValue={title}
                ref={titleRef} 
                required/>
            </Form.Group>
          </Col>
          
          <Col>
            <NoteFormSelect
              selectedTags={selectedTags}
              onSelectTags={handleTagsSelect}
              onCreateTags={handleTagsCreate}
            />
          </Col>
        </Row>
        
        <Form.Group controlId={`${divId}-markdown`}>
        <Form.Label hidden>Markdown</Form.Label>
          <Form.Control
            placeholder='Add note here'
            defaultValue={markdown}
            required
            as='textarea'
            ref={markdownRef}
            rows={15}
          />
        </Form.Group>

        <CtaButtons />


      </Stack>
    </Form>
  )
}

export default NoteForm;
