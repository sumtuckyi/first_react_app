import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../components/Data"

function Detail() {
    const {id} = useParams();
    const [info, set_info] = useState("");
    const [loading, set_loading] = useState(true);
    const get_movie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();  
        console.log(json); 
        set_info(json.data.movie);
        set_loading(false);
    };  
    useEffect( () => {
        get_movie();
    }, []);
    return (
        <div>
            {loading ? (
            <h1>Loading...</h1>    
            ) : (
                <div>
                    <Data 
                        smallImg={info.large_cover_image}
                        title={info.title}
                        lang={info.language}
                        runtime={info.runtime}
                        rating={info.rating}
                        description={info.description_full}
                    />
                </div>
            )}
        </div>
    );
};

export default Detail;