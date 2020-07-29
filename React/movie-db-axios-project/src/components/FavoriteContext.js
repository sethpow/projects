import React, { createContext, useState } from 'react'
const FavoriteContext = createContext()

function FavoriteContextProvider(props) {
    const [favoriteMovies, setFavoriteMovies] = useState([])

    function addFavoriteMovies(movie){
        setFavoriteMovies(prevFavoriteMovies => {
            return [
                ...prevFavoriteMovies, movie
            ]
        })
    } 

    return (
        <FavoriteContext.Provider value={{favoriteMovies, addFavoriteMovies}} >
            {props.children}
        </FavoriteContext.Provider>
    )
}

export {FavoriteContextProvider, FavoriteContext}