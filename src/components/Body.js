import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {

    //Local state variable -> powerful js variable -> useState hook
    const [listOfRestaurents, setListOfRestaurents] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        const data = await fetch(
            "https://swiggy-api-bypass-cors.vercel.app/api/restaurants?lat=19.049391&lng=73.065269"
            );

            const json = await data.json();
            console.log(json)

            console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

            setListOfRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }


    return listOfRestaurents.length === 0 ? <Shimmer /> : (
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