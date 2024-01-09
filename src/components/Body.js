import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockdata";
import { useState } from "react";


const Body = () => {

    //Local state variable -> powerful js variable -> useState hook
    const [listOfRestaurents, setListOfRestaurents] = useState(resList);


    return (
        <div className="body">
            <div className="filter">
               <button className="filter-btn" onClick={
                () => {
                   const filteredList = listOfRestaurents.filter(
                        (res) => res.info.avgRating > 4.5
                    );
                    setListOfRestaurents(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    //For looping through all the restaurents using map
                    listOfRestaurents.map(restaurant => (
                    <RestaurentCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
}

export default Body;