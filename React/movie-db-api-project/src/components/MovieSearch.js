import React, {useState} from 'react'
import MovieCard from './MovieCard'

export default function MovieSearch({theme}) {
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=7215a22cca45154e63c80f30105a8d33&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            setMovies(data.results)
        } catch (error) {
            console.log(error)
        }
        console.log('query: ', query)
    }
    
    return (
        <div className={`${theme}Theme`}>
            <form className='searchForm' onSubmit={handleSubmit}>
                <div></div>
                <input
                    required
                    type='text'
                    name='query'
                    value={query}
                    placeholder='Search...'
                    onChange={(e) => {setQuery(e.target.value)}}
                    autoComplete='off'
                />
                <button>Submit</button>
            </form>

            {/* render the searched movie title */}
            <div>
                {movies.map(movie => (
                    <MovieCard
                        movie={movie} key={movie.id}
                    />
                ))}
            </div>
        </div>
    )
}
