const FavouriteFilms = ({films, onFilmSelected}) => {
    
    const favouriteFilms = films.filter(film => film.favourite)
return(
<div>
<h3>Favourite Films</h3>
<ul>
    {favouriteFilms.map(film => {
        return(
            <li key={film.id}>
                <button onClick={() => onFilmSelected(film.id)}>test{film.title}</button>
            </li>
        )
    })}
    
</ul>
    
</div>
);
}
export default FavouriteFilms;