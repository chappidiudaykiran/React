const RestaurantCard = ({ res }) => {
    if (!res) return null;
    const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
    return (
        <div className="res-card">
            <img 
                className="res-logo" 
                src={CDN_URL + res.cloudinaryImageId} 
                alt={res.name}
            />
            <h3>{res.name}</h3>
            <h3>⭐ {res.avgRating}</h3>
            <h3>{res.cuisines.join(", ")}</h3>
            <h3>🕒 {res.sla.deliveryTime} mins</h3>
        </div>
    );
}

export default RestaurantCard;