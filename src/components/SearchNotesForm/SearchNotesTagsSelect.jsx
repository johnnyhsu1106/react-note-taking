import { Form } from 'react-bootstrap';
import ReactSelect from 'react-select';


const SearchNotesTagsSelect = ({
  availableTags,
  selectedTags,
  onSearchTags
}) => {
  return (
    <Form.Group controlId='tags'>
      <ReactSelect
        isMulti
        placeholder='Search by tags'
        value={selectedTags.map((selectedTag) => {
          return { label: selectedTag.label, value: selectedTag.id }
        })}
        
        options={availableTags.map((availableTag) => {
          return { label: availableTag.label, value: availableTag.id }
        })}
        onChange={(tags) => { onSearchTags(tags) }}
      />
  </Form.Group>
  )
}

export default SearchNotesTagsSelect;
