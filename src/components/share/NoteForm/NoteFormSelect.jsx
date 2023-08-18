import { Form } from 'react-bootstrap'
import CreatableReactSelect from 'react-select/creatable';


const NoteFormSelect = ({
  availableTags,
  selectedTags,
  onSelectTags,
  onCreateTags
}) => {
  return (
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
