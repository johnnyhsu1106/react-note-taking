import { useId } from 'react';
import { Form } from 'react-bootstrap'
import CreatableReactSelect from 'react-select/creatable';
import { useNotesContext } from '../../context/NotesContext';


const NoteFormSelect = ({
  selectedTags,
  onSelectTags,
  onCreateTag
}) => {
  const { availableTags } = useNotesContext();
  const divId = useId();
  
  return (
    <Form.Group controlId={`${divId}-tags`}>
      <Form.Label hidden>Tags</Form.Label>
      <CreatableReactSelect 
        isMulti
        placeholder='Add some tags...'

        options={availableTags.map((availableTag) => {
          return { 
            label: availableTag.label, 
            value: availableTag.id
          }
        })}

        value={selectedTags.map((selectedTag) => {
          return { 
            label: selectedTag.label,
            value: selectedTag.id 
          }
        })}

        onChange={(tags) => {
          onSelectTags(tags);
        }}

        onCreateOption={(label) => {
          onCreateTag(label);
        }}
      />
    </Form.Group>
  )
}

export default NoteFormSelect
