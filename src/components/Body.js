import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { MOCK_RESTAURANTS } from "../utils/mockData";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // Simulating API call delay with mock data
    setTimeout(() => {
      setAllRestaurants(MOCK_RESTAURANTS);
      setFilteredRestaurants(MOCK_RESTAURANTS);
    }, 500);
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
