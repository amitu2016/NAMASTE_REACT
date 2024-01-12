import { CDN_URL } from "../utils/constants";

const MenuCard = (props) => {

    const{menuData} = props;

    const {imageId, name, price, ratings} = menuData?.card?.info;


    return (
        <div className="menucard" style={{
            backgroundColor : "#f0f0f0"
        }}>
            <img 
            className="res-logo"
            src={
                CDN_URL
                +imageId
            }
            alt="image not available"></img>
            <h3>{name}</h3>
            <h3>{"Rs. "+price/100+"/-"}</h3>
            <h3>{ratings.aggregatedRating.rating} Stars</h3>
        </div>
    );
}

export default MenuCard;