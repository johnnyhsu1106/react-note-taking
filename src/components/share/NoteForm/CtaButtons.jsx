import { Stack, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const CtaButtons = () => {
  return (
    <Stack 
      className='justify-content-end'
      direction='horizontal' 
      gap={2}
    >
      <Button 
        type='submit' 
        variant='dark'>
        Save
      </Button>
      
      <Link to='..'>
        <Button 
          type='button' 
          variant='outline-secondary'>
          Cancel
        </Button>
      </Link>
      
    </Stack>
  )
}

export default CtaButtons;
