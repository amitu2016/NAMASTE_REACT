import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import MenuCard from "./MenuCard";

const RestaurentMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            MENU_API+resId
        );

        const json = await data.json();
        console.log(json);
        setResInfo(json.data)
        //console.log(json.data?.cards[0]?.card?.card?.info?.name)
        //console.log(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
    }

    if (resInfo === null) {
        return <Shimmer />
    }

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.
    cardGroupMap?.REGULAR?.cards[2]?.card?.card == null ? resInfo?.cards[2]?.groupedCard?.
    cardGroupMap?.REGULAR?.cards[1]?.card?.card : resInfo?.cards[2]?.groupedCard?.
    cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    //console.log(itemCards);
    
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <div className="menucard-container">
                {itemCards?.map(item => <MenuCard key={item?.card?.info?.id}  menuData={item}/>
                )}
            </div>
        </div> 
    );
}

export default RestaurentMenu;