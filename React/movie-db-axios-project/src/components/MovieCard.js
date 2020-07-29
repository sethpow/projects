import React, { useState, useContext } from 'react'
import {FavoriteContext} from './FavoriteContext'

export default function MovieCard({movie}) {
    const {addFavoriteMovies} = useContext(FavoriteContext)
    const [favorited, setFavorited] = useState(false)
    
    const MovieDetails = () => {
        const [showResults, setShowResults] = useState(false)
        
        const onClick = () => setShowResults(showResults === false ? true : false)
        return (
            <div>
                <input type='submit' value={`${showResults === false ? 'Show' : 'Hide'} summary`} onClick={onClick}/>
                {showResults === true ? <Results/> : <Empty/>}
            </div>
        )
    }
    
    const Results = () => (
        <div>
            <hr/>
            <div> {movie.overview} </div>
        </div>
    )

    const Empty = () => (
        <div></div>
    )

    const favorite = () => {
        addFavoriteMovies(movie)
        setFavorited(true)
    }

    return (
    <div>
        <div className='card'>
            <h1> {movie.title} </h1>
            <p>Release date: {movie.release_date} </p>
            <p>Rating: {movie.vote_average}/10</p>
            <img
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={`${movie.title} poster`}
            />
            <br/>
            <MovieDetails/>
            {/* <Favorite/> */}
            <div>
                <button onClick={favorite}>{`${favorited === false ? '♡' : '❤️'}`}</button>
                {favorited === true ? <p className='status'>{'Saved!'}</p> : <p></p>}
            </div>
        </div>
    </div>
    )
    
    // const Favorite = () => {
    //     const [favorited, setFavorited] = useState(false)

    //     const onClick = () => {
    //         setFavorited(favorited === false ? true : false)
    //     }
            
    //     return (
    //         <div>
    //             <button onClick={onClick}>{`${favorited === false ? '♡' : '❤️'}`}</button>
    //             {favorited === true ? <p className='status'>{'Saved!'}</p> : <p></p>}
    //         </div>
    //     )
}