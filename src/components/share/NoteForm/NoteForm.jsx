import { useRef, useState } from 'react';
import { Form, Stack, Row, Col, Button } from 'react-bootstrap';
import CreatableReactSelect from 'react-select/creatable';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid'

import CtaButtons from './CtaButtons';

const NoteForm = ({
  onSubmitForm,
  onAddNewTag,
  availableTags,
  title = '',
  markdown = '',
  tags = []
}) => {
  // tags = [{id, value}, ...]
  const [selectedTags, setSelectedTags] = useState(tags);
  const titleRef = useRef(null);
  const markdownRef = useRef(null);
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    onSubmitForm({
      title: titleRef.current.value,
      markdown: markdownRef.current.value,
      tags: selectedTags
    });

    navigate('..');

  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId='title'>
              <Form.Label> Title </Form.Label>
              <Form.Control
                defaultValue={title}
                ref={titleRef} 
                required/>
            </Form.Group>
          </Col>
          
          <Col>
            <Form.Group controlId='tags'>
              <Form.Label>Tags</Form.Label>
              <CreatableReactSelect 
                isMulti

                options={ availableTags.map((availableTag) => {
                  return { 
                    label: availableTag.label, 
                    value: availableTag.id
                  }
                })}

                value={ selectedTags.map((selectedTag) => {
                  return { 
                    label: selectedTag.label,
                    value: selectedTag.id 
                  }
                })}

                onChange={(selectedTags) => {
                  setSelectedTags(
                    selectedTags.map((selectedTag) => {
                      return { 
                        id: selectedTag.value,
                        label: selectedTag.label
                      }
                    })
                  )
                }}

                onCreateOption={(label) => {
                  const newTag = { id: uuidV4(), label};
                  onAddNewTag(newTag);
                  setSelectedTags((prevTags) => {
                    return [...prevTags, newTag];
                  })

                }}
              />
            </Form.Group>
          </Col>
        </Row>
        
        <Form.Group controlId='markdown'>
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
