import GhibilfyContainer from "../containers/GhibilfyContainer"
import'./FilmDetail.css';

const FilmDetail = ({selectedFilm, onFavouriteToggle}) => {

    if (!selectedFilm) {
        return null
    }

    const handleClick = () => {
        onFavouriteToggle(selectedFilm.id)
    }

    const favouriteBtnText = selectedFilm.favourite ? 'Remove from favourites' : 'Add to favourites'

    return (
        <div
         className="film-details">
        <h2>{selectedFilm.title} ({selectedFilm.release_date}) </h2>
            <div className="image">
                <img src={selectedFilm.image} width="150px" height="auto" />
             </div>
            <div className="details">
                <p>{selectedFilm.description}</p>
            </div>
            <button onClick={handleClick}>{favouriteBtnText}</button>
        </div>
    )
}

export default FilmDetail;