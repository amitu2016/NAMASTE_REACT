import { CDN_URL } from "../utils/constants";


const RestaurentCard = (props) => {
    //destructuring of object on the fly
    const {resData} = props;

    const {
        cloudinaryImageId, 
        name, 
        cuisines, 
        avgRatingString, 
        costForTwo, 
        sla
    } = resData?.info;

    return (
        <div className="rest-card" style={{
            backgroundColor : "#f0f0f0"
        }}>
            <img 
            className="res-logo"
            src={
                CDN_URL
                +cloudinaryImageId
            }
            alt="res-logo"></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRatingString} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString}</h4>
        </div>
    );
};

export default RestaurentCard;