const RestaurantCard = ({ res }) => {
    if (!res) return null;
    const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
    const imageId = res?.cloudinaryImageId || res?.cloudinaryImageIdV2 || "";
    const name = res?.name || "Restaurant";
    const rating = res?.avgRating ?? res?.avgRatingString ?? "-";
    const cuisines = Array.isArray(res?.cuisines) ? res.cuisines : [];
    const deliveryTime = res?.sla?.deliveryTime ?? res?.slaString ?? "-";

    return (
        <div className="res-card">
            <img 
                className="res-logo" 
                src={imageId ? CDN_URL + imageId : ""} 
                alt={name}
            />
            <h3>{name}</h3>
            <h3>⭐ {rating}</h3>
            <h3>{cuisines.length ? cuisines.join(", ") : ""}</h3>
            <h3>🕒 {deliveryTime} {typeof deliveryTime === "number" ? "mins" : ""}</h3>
        </div>
    );
}

export default RestaurantCard;