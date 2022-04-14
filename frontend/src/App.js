import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';

import Navigation from './components/navigation';
import ExercisesList from './components/exercises_list';
import EditExercise from './components/edit_exercise';
import CreateExercise from './components/create_exercise';
import CreateUser from './components/create_user';

const App = () => {
  return (
    <div>
      <Navigation />
      
      <Container>
        <Routes>
          <Route path='' element={ <ExercisesList /> } />
          <Route path='/edit/:id' element={ <EditExercise /> } />
          <Route path='/create' element={ <CreateExercise /> } />
          <Route path='/register' element={ <CreateUser /> } />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
