import { Form, Row, Col } from 'react-bootstrap'
import SearchNotesTitleInput from './SearchNotesTitleInput'
import SearchNotesTagsSelect from './SearchNotesTagsSelect'


const SearchNotesForm = ({
  title,
  selectedTags,
  onSearchTitle,
  onClearSearch,
  onSearchTags,
}) => {
  return (
    <Form>
      <Row className='mb-4'>
        <Col>
          <SearchNotesTitleInput
            title={title}
            onClearSearch={onClearSearch}
            onSearchTitle={onSearchTitle}
          />
        </Col>

        <Col>
          <SearchNotesTagsSelect
            selectedTags={selectedTags}
            onSearchTags={onSearchTags}
          />
        </Col>
      </Row>
    </Form>

  )
}

export default SearchNotesForm
