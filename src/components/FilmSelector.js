const FilmSelector = ({films, handleFilmSelected}) => {

    const handleChange = event => {
        handleFilmSelected(event.target.value);
    }

        const filmOptions = films.map(film => {
            return (
            <option 
                value = { film.id } 
                key = { film.id }
                >
                    { film.title }
                </option>
            )
        })
    
        return(
            <>
            Film Selector
            <select defaultValue="" onChange={handleChange}>
                <option >Choose Ghibli Film</option>
                    {filmOptions}
            </select>
            </>
        )
}

export default FilmSelector