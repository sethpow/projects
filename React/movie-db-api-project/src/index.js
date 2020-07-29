import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './style.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeContextProvider } from './components/ThemeContext'
import { FavoriteContextProvider } from './components/FavoriteContext'

ReactDOM.render(
    <BrowserRouter>
        <FavoriteContextProvider>
            <ThemeContextProvider>
                <App/>
            </ThemeContextProvider>
        </FavoriteContextProvider>
    </BrowserRouter>,
    document.getElementById('root')
)