import "./movie-list.css";
import MovieListItem from "../movie-list-item/movie-list-item";
const MovieList = ({ data }) => {
    return (
        <div className="movie-list">
            {data.map((item) => (
                <MovieListItem name={item.name} viewers={item.viewers} />
                // MovieList componentga MovieListItem componentni hususiyatlarini dynamic berildi//
            ))}
        </div>
    );
};

export default MovieList;
