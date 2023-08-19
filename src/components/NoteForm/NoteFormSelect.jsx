import { useId } from 'react';
import { Form } from 'react-bootstrap'
import CreatableReactSelect from 'react-select/creatable';
import { useNotesContext } from '../../context/NotesContext';


const NoteFormSelect = ({
  selectedTags,
  onSelectTags,
  onCreateTags
}) => {
  const { tags } = useNotesContext();
  const divId = useId();
  
  return (
    <Form.Group controlId={`${divId}-tags`}>
      <Form.Label hidden>Tags</Form.Label>
      <CreatableReactSelect 
        isMulti
        placeholder='Add some tags...'

        options={ tags.map((availableTag) => {
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

        onChange={(tags) => {
          onSelectTags(tags);
        }}

        onCreateOption={(label) => {
         onCreateTags(label);
        }}
      />
    </Form.Group>
  )
}

export default NoteFormSelect
