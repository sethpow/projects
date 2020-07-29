import React, { useContext } from 'react'
import MovieSearch from './MovieSearch'
import { ThemeContext } from './ThemeContext'

export default function Home() {
    const {theme} = useContext(ThemeContext)

    return (
        <div>
            <div>
                <h1 className='homeTitle'><div className={`${theme}Theme`}>React Movie Database</div></h1>
                <MovieSearch
                    theme={theme}
                />
            </div>
        </div>
    )
}
