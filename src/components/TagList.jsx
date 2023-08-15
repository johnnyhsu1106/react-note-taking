import { Badge, Stack } from 'react-bootstrap'


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
        return (
          <Badge 
            className='text-white text-truncate' 
            key={tag.id}
            bg='success'
          >
            {tag.label}
          </Badge>
        )
      })}
    </Stack>
  )
}

export { TagList };