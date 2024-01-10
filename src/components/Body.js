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
            "https://swiggy-api-bypass-cors.vercel.app/api/restaurants?lat=19.025330676643726&lng=73.0548236544475"
            );

            const json = await data.json();

            //console.log(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)

            setListOfRestaurents(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    if (listOfRestaurents.length === 0) {
        return <Shimmer />
    }

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