import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const[filteredRestaurants,setFilteredRestaurants]=useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=%20DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setListOfRestaurants(restaurants.map((restaurant) => restaurant.info));
    setFilteredRestaurants(restaurants.map((restaurant) => restaurant.info));
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
            <input type="text" placeholder="Search restaurants" className="search-box" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
            <button className="search-btn" onClick={()=>{
                const filteredRestaurants = listOfRestaurants.filter((res)=>res.name.toLowerCase().includes(searchText.toLowerCase()));
                setFilteredRestaurants(filteredRestaurants);
            }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.avgRating >= 4.3
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((res) => (
          <RestaurantCard key={res.id} res={res} />
        ))}
      </div>
    </div>
  );
};
export default Body;
