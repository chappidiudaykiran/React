import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resData);

    return (
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn" 
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter((res) => parseFloat(res.rating) >= 4.3);
                        setListOfRestaurants(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((res) => (
                    <RestaurantCard
                        key={res.id}
                        res={res}
                    />
                ))}
            </div>
        </div>
    );
}
export default Body;