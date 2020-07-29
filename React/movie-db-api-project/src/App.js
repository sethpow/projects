import React from 'react'
import Home from './components/Home'
import Profile from './components/Profile'
import Settings from './components/Settings'
import {Switch, Route} from 'react-router-dom'
import Navbar from './Navbar'

export default function App() {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/profile'><Profile/></Route>
                <Route path='/settings'><Settings/></Route>
            </Switch>
        </div>
    )
}