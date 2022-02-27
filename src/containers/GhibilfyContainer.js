import { useState, useEffect } from 'react'
import FilmDetail from '../components/FilmDetail'
import FilmSelector from '../components/FilmSelector'
import './GhiblifyContainer.css'
import FavouriteFilms from '../components/FavouriteFilms'


const GhibilfyContainer = () => {
    
    const [films, setFilms] = useState([])
    const [selectedFilmId, setSelectedFilmId] = useState('')

    useEffect(() => {
    getFilms()
    }, [])

    const getFilms = () => {
            fetch("https://ghibliapi.herokuapp.com/films")
            .then(response => response.json())
            .then(filmsData => setFilms(filmsData))
        }
    
    const handleFilmSelected = id => {
        setSelectedFilmId(id)
}

    const handleFavouriteToggle = (id) => {
        const updatedFilms = films.map((film) => {
            if (film.id === id) {
                film.favourite = !film.favourite
            }
            return film
        })
        setFilms(updatedFilms)
    }

    const selectedFilm = films.find(film => film.id === selectedFilmId);

    const onFilmSelected = (film) => {setSelectedFilmId(film.id)};


    return (
        <div className="main-container">
        <h1>Ghiblify Container</h1>
        <FilmSelector films={films} onFilmSelected={handleFilmSelected} />
        <p>{selectedFilm}</p>
        
        <FilmDetail selectedFilm={selectedFilm} onFavouriteToggle={handleFavouriteToggle} />

        <FavouriteFilms  films={films} onFilmSelected={handleFilmSelected} /> 
        </div>
        )
}

export default GhibilfyContainer