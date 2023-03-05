import PropTypes from "prop-types";
import styles from "./Recent_movies.module.css";


function Recent_movies({coverImg, title, summary, year}) {
    return (
        <div className={styles.show}>
            <img src={`https://image.tmdb.org/t/p/w500${coverImg}`} className={styles.show_img}></img>
            <h2>{title}</h2>
            <h3>{`Release date: ${year}`}</h3>
            <p>{summary}</p>
        </div>
    )
};

Recent_movies.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
};

export default Recent_movies;

