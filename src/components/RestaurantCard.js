import { IMG_CDN_URL } from "../constants";
const RestrauntCard =({name,cuisines,lastMileTravelString,cloudinaryImageId})=>{ 

    return(
        <div className="card">
            <img src={IMG_CDN_URL + cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString} stars</h4>
        </div>
    )
}

export default RestrauntCard;