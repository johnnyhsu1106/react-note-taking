import { useId } from 'react';
import { Form } from 'react-bootstrap';

const SearchNotesTitleInput = ({
  title,
  onSearchTitle
}) => {

  const divId = useId();
  return (
    <Form.Group controlId={`${divId}-title`}>
      <Form.Label hidden>Title</Form.Label>
      <Form.Control
        type='text'
        value={title}
        placeholder='Search title by keyword'
        onChange={(e) => { onSearchTitle(e.target.value)} }
      />
  </Form.Group>
  )
}

export default SearchNotesTitleInput;
