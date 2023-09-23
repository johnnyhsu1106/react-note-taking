import { useId, memo } from 'react';
import { Form } from 'react-bootstrap';


const SearchNotesTitleInput = ({
  title,
  onSearchTitle,
  onClearSearch
}) => {
  const divId = useId();

  const DeleteBtn = memo(({ title }) => {
    if (title.trim() === '') {
      return null;
    }
    return (
      <div 
        className='search-delete-btn'
        onClick={onClearSearch}
      >
        &times;
      </div> 
    )
  });


  return (
    <Form.Group
      className='search-keyword' 
      controlId={`${divId}-title`}>
      <Form.Label hidden>Title</Form.Label>
      <Form.Control
        type='text'
        value={title}
        placeholder='Search title by keyword'
        onChange={(e) => { onSearchTitle(e.target.value)} }
      />
      <DeleteBtn title={title} />
  </Form.Group>
  )
}

export default SearchNotesTitleInput;
