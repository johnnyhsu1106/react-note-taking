import { useId } from 'react';
import { Form } from 'react-bootstrap';
import ReactSelect from 'react-select';
import { useNotesContext } from '../../context/NotesContext';


const SearchNotesTagsSelect = ({
  selectedTags,
  onSearchTags
}) => {
  const { availableTags } = useNotesContext();
  const divId = useId();

  return (
    <Form.Group controlId={`${divId}-title`}>
      <Form.Label hidden>Title</Form.Label>
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
