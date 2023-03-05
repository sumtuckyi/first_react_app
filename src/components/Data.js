import PropTypes from "prop-types";
import styles from "./Data.module.css";

function Data({smallImg, title, lang, rating, runtime, description}) {
    return (
        <div className={styles.container}>
            <img src={smallImg} alt={title} className={styles.image} />
            <h2 className={styles.title}>{title}</h2>
            <h3 className={styles.info}>{`Language: ${lang}`}</h3>
            <h3 className={styles.info}>{`Rating: ${rating}`}</h3>
            <h3 className={styles.info}>{`Runtime: ${runtime} min`}</h3>
            <p className={styles.summary}>{description}</p>
        </div>
    );
};

Data.propTypes = {
    smallImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired, 
};

export default Data;