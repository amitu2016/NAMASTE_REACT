import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockdata";


const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                {
                    //For looping through all the restaurents using map
                    resList.restaurants.map(restaurant => (
                    <RestaurentCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
}

export default Body;