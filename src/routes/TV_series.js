import { useEffect, useState } from "react";
import Nav from "../components/nav_bar";
import TV from "../components/TV";

function TV_series() {
    const [loading, set_loading] = useState(true);
    const [shows, set_shows] = useState([]);
    const get_shows = async () => {
        const json = await (
            await fetch(
                'https://api.themoviedb.org/3/discover/tv?api_key=5afdcbd8852897c2bd2ed5f114923841&sort_by=popularity.desc&page=1&with_watch_monetization_types=flatrate&with_status=0&with_type=0'        
                )
        ).json();
        set_shows(json.results);
        set_loading(false);
        console.log(json);
    };

    useEffect(()=> {
        get_shows();
    },[]);

    return (
        <div>
            <Nav />
            {loading ? (
            <h1>Loading...</h1>
            ) : (
                <div>
                    {shows.map((show) => (
                        <TV 
                        key={show.id}
                        coverImg={show.poster_path}
                        title={show.name}
                        summary={show.overview}
                        year={show.first_air_date}
                        language={show.original_language}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default TV_series;