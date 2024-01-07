import React from "react";
import ReactDOM from "react-dom/client";
import logo from './logo.png';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="logo"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

// const styleCard = {
//     backgroundColor : "#f0f0f0"  
// }

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
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
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

const resList = { 
    "restaurants": [
    {
    "info": {
    "id": "305819",
    "name": "Barbeque Nation",
    "cloudinaryImageId": "eqlv13396tnnwufweqpl",
    "locality": "CBD-Belapur",
    "areaName": "CBD-Belapur",
    "costForTwo": "₹600 for two",
    "cuisines": [
    "North Indian",
    "Barbecue",
    "Biryani",
    "Kebabs",
    "Mughlai",
    "Desserts"
    ],
    "avgRating": 4,
    "parentId": "2438",
    "avgRatingString": "4.0",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 28,
    "lastMileTravel": 6.7,
    "serviceability": "SERVICEABLE",
    "slaString": "28 mins",
    "lastMileTravelString": "6.7 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-07 23:30:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/barbeque-nation-cbd-belapur-mumbai-305819",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "415194",
    "name": "Burger King",
    "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    "locality": "Kharghar -ltile world",
    "areaName": "Little world Mall",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Burgers",
    "American"
    ],
    "avgRating": 4.3,
    "parentId": "166",
    "avgRatingString": "4.3",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 22,
    "lastMileTravel": 2.9,
    "serviceability": "SERVICEABLE",
    "slaString": "22 mins",
    "lastMileTravelString": "2.9 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-08 03:45:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/burger-king-kharghar-ltile-world-little-world-mall-mumbai-415194",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "30245",
    "name": "McDonald's",
    "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
    "locality": "Pacific Heights",
    "areaName": "Kharghar",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Burgers",
    "Beverages",
    "Cafe",
    "Desserts"
    ],
    "avgRating": 4.5,
    "parentId": "630",
    "avgRatingString": "4.5",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 17,
    "lastMileTravel": 1.4,
    "serviceability": "SERVICEABLE",
    "slaString": "17 mins",
    "lastMileTravelString": "1.4 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-08 00:45:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/mcdonalds-pacific-heights-kharghar-mumbai-30245",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "425510",
    "name": "KFC",
    "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
    "locality": "Kharghar",
    "areaName": "Kharghar",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Burgers",
    "Biryani",
    "American",
    "Snacks",
    "Fast Food"
    ],
    "avgRating": 4.2,
    "parentId": "547",
    "avgRatingString": "4.2",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 18,
    "lastMileTravel": 2.9,
    "serviceability": "SERVICEABLE",
    "slaString": "18 mins",
    "lastMileTravelString": "2.9 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-08 04:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/kfc-kharghar-mumbai-425510",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "64138",
    "name": "Pizza Hut",
    "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
    "locality": "Sector 7",
    "areaName": "Kharghar",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Pizzas"
    ],
    "avgRating": 4,
    "parentId": "721",
    "avgRatingString": "4.0",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 27,
    "lastMileTravel": 2.6,
    "serviceability": "SERVICEABLE",
    "slaString": "27 mins",
    "lastMileTravelString": "2.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-08 05:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/pizza-hut-sector-7-kharghar-mumbai-64138",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "28793",
    "name": "Domino's Pizza",
    "cloudinaryImageId": "sj4p3vftyl9ffruimuzt",
    "locality": "Plot No. 18, Sector -20",
    "areaName": "Kharghar",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Pizzas",
    "Italian",
    "Pastas",
    "Desserts"
    ],
    "avgRating": 4.2,
    "parentId": "2456",
    "avgRatingString": "4.2",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 25,
    "serviceability": "SERVICEABLE",
    "slaString": "25 mins",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-08 02:59:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/dominos-pizza-plot-no-18-sector-20-kharghar-mumbai-28793",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "293959",
    "name": "Pranaam Fine Dine",
    "cloudinaryImageId": "duv6haqx6sk0zrcpdbab",
    "locality": "Sector 12",
    "areaName": "Kharghar",
    "costForTwo": "₹450 for two",
    "cuisines": [
    "Mughlai",
    "North Indian",
    "Tandoor"
    ],
    "avgRating": 4.2,
    "parentId": "160582",
    "avgRatingString": "4.2",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 25,
    "lastMileTravel": 1.1,
    "serviceability": "SERVICEABLE",
    "slaString": "25 mins",
    "lastMileTravelString": "1.1 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-08 00:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/pranaam-fine-dine-sector-12-kharghar-mumbai-293959",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "137365",
    "name": "Theobroma",
    "cloudinaryImageId": "b033728dcb0101ceb19bff0e1e1f6474",
    "locality": "Arenja Corner",
    "areaName": "Vashi",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Bakery",
    "Desserts"
    ],
    "avgRating": 4.5,
    "parentId": "1040",
    "avgRatingString": "4.5",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 35,
    "lastMileTravel": 13.9,
    "serviceability": "SERVICEABLE",
    "slaString": "35 mins",
    "lastMileTravelString": "13.9 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-07 23:59:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "newg.png",
    "description": "Gourmet"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "Gourmet",
    "imageId": "newg.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/theobroma-arenja-corner-vashi-mumbai-137365",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "66810",
    "name": "Chinese Wok",
    "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
    "locality": "Sector 20",
    "areaName": "Kharghar",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Chinese",
    "Asian",
    "Tibetan",
    "Desserts"
    ],
    "avgRating": 4,
    "parentId": "61955",
    "avgRatingString": "4.0",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 17,
    "lastMileTravel": 1.5,
    "serviceability": "SERVICEABLE",
    "slaString": "17 mins",
    "lastMileTravelString": "1.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-07 23:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/chinese-wok-sector-20-kharghar-mumbai-66810",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "30885",
    "name": "Natural Ice Cream",
    "cloudinaryImageId": "jkjme12t0aa3foem14pi",
    "locality": "Near Shilp Chowk",
    "areaName": "Kharghar",
    "costForTwo": "₹150 for two",
    "cuisines": [
    "Ice Cream",
    "Desserts"
    ],
    "avgRating": 4.8,
    "veg": true,
    "parentId": "2093",
    "avgRatingString": "4.8",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 13,
    "lastMileTravel": 1.4,
    "serviceability": "SERVICEABLE",
    "slaString": "13 mins",
    "lastMileTravelString": "1.4 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-08 00:55:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/natural-ice-cream-near-shilp-chowk-kharghar-mumbai-30885",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "27116",
    "name": "Behrouz Biryani",
    "cloudinaryImageId": "89fccaa76f2f760e2742b9e53d32bb69",
    "locality": "Simran Residency",
    "areaName": "Kharghar RK",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "Biryani",
    "Kebabs",
    "Mughlai",
    "Lucknowi",
    "Hyderabadi",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4.1,
    "parentId": "1803",
    "avgRatingString": "4.1",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 28,
    "lastMileTravel": 2.4,
    "serviceability": "SERVICEABLE",
    "slaString": "28 mins",
    "lastMileTravelString": "2.4 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-07 23:59:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "newg.png",
    "description": "Gourmet"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "Gourmet",
    "imageId": "newg.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/behrouz-biryani-simran-residency-kharghar-rk-mumbai-27116",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "32619",
    "name": "Meraki",
    "cloudinaryImageId": "x1bcxkp8lctaeungngfy",
    "locality": "Sector 3",
    "areaName": "Kharghar",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "Chinese",
    "Thai",
    "Asian"
    ],
    "avgRating": 4.2,
    "parentId": "2356",
    "avgRatingString": "4.2",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 26,
    "lastMileTravel": 3,
    "serviceability": "SERVICEABLE",
    "slaString": "26 mins",
    "lastMileTravelString": "3.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-08 03:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/meraki-sector-3-kharghar-mumbai-32619",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "44161",
    "name": "Charcoal Eats - Biryani & Beyond",
    "cloudinaryImageId": "d796c32a336dcce6814de6921d916966",
    "locality": "Kharghar",
    "areaName": "Kharghar",
    "costForTwo": "₹499 for two",
    "cuisines": [
    "Biryani",
    "Kebabs",
    "Hyderabadi"
    ],
    "avgRating": 4.1,
    "parentId": "5338",
    "avgRatingString": "4.1",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 19,
    "lastMileTravel": 0.8,
    "serviceability": "SERVICEABLE",
    "slaString": "19 mins",
    "lastMileTravelString": "0.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-08 02:45:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/charcoal-eats-biryani-and-beyond-kharghar-mumbai-44161",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "28911",
    "name": "Cheelizza - India ka Pizza",
    "cloudinaryImageId": "f58a1b772e5eeea45ff8ead3890703ed",
    "locality": "Kharghar",
    "areaName": "Kharghar",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "Pizzas",
    "Italian",
    "Fast Food"
    ],
    "avgRating": 4.3,
    "veg": true,
    "parentId": "375077",
    "avgRatingString": "4.3",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 26,
    "lastMileTravel": 1.5,
    "serviceability": "SERVICEABLE",
    "slaString": "26 mins",
    "lastMileTravelString": "1.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-08 03:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ],
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/cheelizza-india-ka-pizza-kharghar-mumbai-28911",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "35533",
    "name": "Sweet Truth - Cake and Desserts",
    "cloudinaryImageId": "81cf6bfe2760a45a0caf2e28716ca4d7",
    "locality": "Simran Residency",
    "areaName": "Kharghar RK",
    "costForTwo": "₹450 for two",
    "cuisines": [
    "Snacks",
    "Bakery",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4.3,
    "parentId": "4444",
    "avgRatingString": "4.3",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 26,
    "lastMileTravel": 2.4,
    "serviceability": "SERVICEABLE",
    "slaString": "26 mins",
    "lastMileTravelString": "2.4 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-07 23:59:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-simran-residency-kharghar-rk-mumbai-35533",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "257191",
    "name": "Baskin Robbins - Ice Cream Desserts",
    "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
    "locality": "Sector 21",
    "areaName": "Kharghar",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Desserts",
    "Ice Cream"
    ],
    "avgRating": 4.7,
    "veg": true,
    "parentId": "5588",
    "avgRatingString": "4.7",
    "totalRatingsString": "500+",
    "sla": {
    "deliveryTime": 14,
    "lastMileTravel": 0.8,
    "serviceability": "SERVICEABLE",
    "slaString": "14 mins",
    "lastMileTravelString": "0.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-07 23:59:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-sector-21-kharghar-mumbai-257191",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "351103",
    "name": "Grameen Kulfi",
    "cloudinaryImageId": "rmi7aycp29azclvfq1yd",
    "locality": "Sector 19",
    "areaName": "Kharghar",
    "costForTwo": "₹120 for two",
    "cuisines": [
    "Ice Cream",
    "Desserts"
    ],
    "avgRating": 4.7,
    "veg": true,
    "parentId": "12175",
    "avgRatingString": "4.7",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 14,
    "lastMileTravel": 2,
    "serviceability": "SERVICEABLE",
    "slaString": "14 mins",
    "lastMileTravelString": "2.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-08 00:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "EVERY ITEM",
    "subHeader": "@ ₹99"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/grameen-kulfi-sector-19-kharghar-mumbai-351103",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "66504",
    "name": "Singh Saab",
    "cloudinaryImageId": "nfyqaddsogzrti0hmrk4",
    "locality": "Kharghar",
    "areaName": "Kharghar",
    "costForTwo": "₹800 for two",
    "cuisines": [
    "North Indian",
    "Chinese",
    "Indian",
    "Biryani",
    "Mughlai",
    "Kebabs"
    ],
    "avgRating": 4.1,
    "parentId": "2041",
    "avgRatingString": "4.1",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 30,
    "lastMileTravel": 1.2,
    "serviceability": "SERVICEABLE",
    "slaString": "30 mins",
    "lastMileTravelString": "1.2 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-07 23:45:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/singh-saab-kharghar-mumbai-66504",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "50638",
    "name": "99 Pancakes",
    "cloudinaryImageId": "c2f533ee4960991a29227a27f516c59b",
    "locality": "Sector 4",
    "areaName": "Kharghar",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4.5,
    "veg": true,
    "parentId": "387975",
    "avgRatingString": "4.5",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 22,
    "lastMileTravel": 2.4,
    "serviceability": "SERVICEABLE",
    "slaString": "22 mins",
    "lastMileTravelString": "2.4 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-08 01:30:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/99-pancakes-sector-4-kharghar-mumbai-50638",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "443508",
    "name": "EatFit",
    "cloudinaryImageId": "6126c9b45de2cb222405c1af8a321e74",
    "locality": "Aum Sai",
    "areaName": "Kharghar",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Chinese",
    "Healthy Food",
    "Tandoor",
    "Pizzas",
    "North Indian",
    "Thalis",
    "Biryani"
    ],
    "avgRating": 4.2,
    "parentId": "76139",
    "avgRatingString": "4.2",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 23,
    "lastMileTravel": 2.7,
    "serviceability": "SERVICEABLE",
    "slaString": "23 mins",
    "lastMileTravelString": "2.7 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-07 23:45:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "brand",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "brand"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹159"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/eatfit-aum-sai-kharghar-mumbai-443508",
    "type": "WEBLINK"
    }
    }
    ]
}

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

const AppLayout = () => {
    return (
    <div className="app">
        <Header />
        <Body />
    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

