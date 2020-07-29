import React, { useContext } from 'react'
import { FavoriteContext } from './FavoriteContext'
import { ThemeContext } from './ThemeContext'
import MovieCard from './MovieCard'

export default function Profile() {
    const {favoriteMovies} = useContext(FavoriteContext)
    const {theme} = useContext(ThemeContext)

    const myMovies = favoriteMovies.map(movie => (
        <MovieCard
            movie={movie}
        />
    ))

    return (
        <div className={`${theme}Theme`}>
            <div className='profile'>
                <div className={`${theme}Theme`}>Your saved movies:</div>
                {myMovies}
            </div>
        </div>
    )
}
