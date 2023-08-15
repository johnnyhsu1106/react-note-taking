import React from 'react'
import { Card, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import TagList from '../share/TagList/TagList';


const NoteCard = ({
  id,
  title,
  tags
}) => {
  return (
    <Card
      className={'h-100 text-reset text-decoration-none note-card'}
      as={Link}
      to={`/${id}`}
    >
      <Card.Body className='bg-dark rounded text-white'>
        <Stack
          className='align-items-center justify-content-center h-100'
          gap={2}
        >
          <span className='fs-6'>{title}</span>
          <TagList tags={tags} />
        </Stack>
      </Card.Body>
    </Card>
  )
}

export default NoteCard;
