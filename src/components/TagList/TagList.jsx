import { Stack } from 'react-bootstrap'
import Tag from './Tag';


const TagList = ({
  tags
}) => {
  if (!tags || tags.length === 0) {
    return null;
  }

  return (
    <Stack 
      className='flex-wrap'
      direction='horizontal'
      gap={1}  
    >
      {tags.map((tag) => {
        const { id } = tag;
        return (
          <Tag key={id} tag={tag} />
        )
      })}
    </Stack>
  )
}

export default TagList;