import PropTypes from "prop-types";
import {Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id, coverImg, title, summary, genres, year}) {
    return (
        <div className={styles.movie}>
          <img src={coverImg} alt={title} className={styles.movie_img}/>
          <h2 className={styles.movie_title}>
            <Link to={`/movie/${id}`}>{title}</Link> 
          </h2>
          <h3 className={styles.movie_year}>{year}</h3>
          <p>{summary.length > 235 ? `${summary.slice(0, 235)}...`: summary}</p>
          <ul className={styles.movie_genres}>
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div> 
    );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}; //Movie라는 컴포넌트의 props의 데이터 타입을 PropTypes라는 메소드로 지정(유효성 검사) 

export default Movie;