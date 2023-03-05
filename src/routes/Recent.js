import { useEffect, useState } from "react";
import Nav from "../components/nav_bar";
import Recent_movies from "../components/Recent_movies";

function Recent() {
    const [loading, set_loading] = useState(true);
    const [recentMovies, set_recentMovies] = useState([]);
    const get_recentMovies = async () => {
        const json = await (
            await fetch (
                'https://api.themoviedb.org/3/discover/movie?api_key=5afdcbd8852897c2bd2ed5f114923841&sort_by=popularity.desc&include_adult=false&include_video=false&year=2023&with_watch_monetization_types=flatrate'
                )
        ).json();
        set_recentMovies(json.results);
        set_loading(false);
        console.log(json);
    };

    useEffect(()=> {
        get_recentMovies();
    }, []);

    return (
        <div>
            <Nav />
            {loading ? (
            <h1>Loading...</h1>
            ) : (
                <div>
                    {recentMovies.map((movie) => (
                        <Recent_movies
                            key={movie.id}
                            coverImg={movie.poster_path}
                            title={movie.original_title}
                            summary={movie.overview}
                            year={movie.release_date}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Recent;