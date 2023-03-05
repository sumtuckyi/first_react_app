import PropTypes from "prop-types";
import styles from "./TV.module.css";

function TV({coverImg, title, summary, year, language}) {
    return (
        <div className={styles.show}>
            <img src={`https://image.tmdb.org/t/p/w500${coverImg}`} className={styles.show_img}/>
            <h2>{title}</h2>
            <h3>{`First-air date: ${year}`}</h3>
            <h3>{`Language: ${language}`}</h3>
            <p>{summary.length === 0 ? "no overview" : summary}</p>
        </div>

    )
};

TV.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default TV;