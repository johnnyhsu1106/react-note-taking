import { Badge } from 'react-bootstrap';


const Tag = ({
  tag
}) => {
  const { label } = tag;
  return (
    <Badge 
      className='text-white text-truncate' 
      bg='success'
    >
      {label}
    </Badge>
  )
}

export default Tag;
