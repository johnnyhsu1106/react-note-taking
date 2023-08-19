
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import HomePage from './pages/HomePage';
import NotesPage from './pages/NotesPage';
import CreateNotePage from './pages/CreateNotePage';
import EditNotePage from './pages/EditNotePage';
import NotFoundPage from './pages/NotFoundPage';
import { NotesProvider } from './context/NotesContext';
import { NoteContext } from './context/NoteContext';
import './App.css'


function App() {
  return (
    <NotesProvider>
      <Container className='my-4'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='new' element={<CreateNotePage />} />
          <Route path=':id' element={<NoteContext />} >
            <Route index element={<NotesPage />} />
            <Route path='edit' element={<EditNotePage />} />
          </Route>
          <Route path='*'element={<NotFoundPage />} />
        </Routes>
      </Container>
    </NotesProvider>
  )
}

export default App;
