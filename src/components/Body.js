import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANTS_API } from "../utils/constants";


const Body = () => {

    //Local state variable -> powerful js variable -> useState hook
    const [listOfRestaurents, setListOfRestaurents] = useState([]);
    const [filteredRestaurent, setFilteredRestaurent] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        const data = await fetch(
            RESTAURANTS_API
            );

            const json = await data.json();
           // console.log(json)

          //  console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

            setListOfRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilteredRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }


    return listOfRestaurents.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }}></input>

                    <button onClick={() => {
                        const filteredRestaurent = listOfRestaurents
                        .filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                        
                        setFilteredRestaurent(filteredRestaurent);
                    }}>Search</button>
                </div>
               <button className="filter-btn" onClick={
                () => {
                   const filteredList = listOfRestaurents.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setFilteredRestaurent(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    //For looping through all the restaurents using map
                    filteredRestaurent.map(restaurant => (
                   <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurentCard resData={restaurant} /></Link>
                ))}
            </div>
        </div>
    );
}

export default Body;