import ListItem from "./ListItem";

const FilmList = ({films}) => {

const filmItems = films.map((film, index) => {
return <ListItem film={film} key ={index} />
})

return(
    <div>
        <ul>
           {filmItems}
        </ul>
    </div>
)};
export default FilmList;