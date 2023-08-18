import { Form } from 'react-bootstrap';

const SearchNotesTitleInput = ({
  title,
  onSearchTitle
}) => {
  return (
    <Form.Group controlId='title'>
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
