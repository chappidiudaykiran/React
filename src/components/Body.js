import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const cards = json?.data?.cards || [];
      const restaurantsCard = cards.find(
        (c) =>
          c?.card?.card?.gridElements?.infoWithStyle?.restaurants &&
          Array.isArray(
            c.card.card.gridElements.infoWithStyle.restaurants
          )
      );
      const restaurants =
        restaurantsCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      const restaurantData = restaurants.map((r) => r?.info || r).filter(Boolean);
      setAllRestaurants(restaurantData);
      setFilteredRestaurants(restaurantData);
    } catch (err) {
      console.error("Failed to fetch restaurants:", err);
      setAllRestaurants([]);
      setFilteredRestaurants([]);
    }
  };

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
            <input 
              type="text" 
              placeholder="Search restaurants" 
              className="search-box" 
              value={searchText} 
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button 
              className="search-btn" 
              onClick={() => {
                const query = searchText.trim().toLowerCase();
                if (!query) {
                  setFilteredRestaurants(allRestaurants);
                  return;
                }
                const results = allRestaurants.filter((res) =>
                  (res?.name || "").toLowerCase().includes(query)
                );
                setFilteredRestaurants(results);
              }}
            >
              Search
            </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = allRestaurants.filter(
              (res) => (Number(res?.avgRating) || 0) >= 4.3
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((res) => (
          <RestaurantCard key={res.id || res.uuid || Math.random()} res={res} />
        ))}
      </div>
    </div>
  );
};
export default Body;
