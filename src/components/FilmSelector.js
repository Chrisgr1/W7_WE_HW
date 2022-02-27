const FilmSelector = ({films, onFilmSelected}) => {

    const handleChange = event => {
        onFilmSelected(event.target.value);
    }

        const filmOptions = films.map((film) => {
            return  <option 
                value={film.id} 
                key={film.id}
                >
                    {film.title}
                </option>
        })
    
        return(
            <select defaultValue="" onChange={handleChange}>
                <option >Choose Ghibli Film</option>
                    {filmOptions}
            </select>
        )
}

export default FilmSelector