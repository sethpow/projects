import React from 'react'
import Navbar from './components/Navbar'
import ExerciseList from './components/ExerciseList'
import EditExercise from './components/EditExercise'
import CreateExercise from './components/CreateExercise'
import CreateUser from './components/CreateUser'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
    return (
        <Router>
            <Navbar/>
            <div className='container'>
                <br/>
                <Route exact path='/' component={ExerciseList}/>
                <Route exact path='/edit/:id' component={EditExercise}/>
                <Route exact path='/create' component={CreateExercise}/>
                <Route exact path='/user' component={CreateUser}/>
            </div>
        </Router>
    )
}