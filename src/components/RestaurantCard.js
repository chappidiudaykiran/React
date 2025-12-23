import { Link } from "react-router-dom";

const RestaurantCard = ({ res }) => {
    if (!res) return null;
    const name = res?.name || "Restaurant";
    const rating = res?.avgRating ?? res?.avgRatingString ?? "-";
    const cuisines = Array.isArray(res?.cuisines) ? res.cuisines : [];
    const deliveryTime = res?.sla?.deliveryTime ?? res?.slaString ?? "-";
    const costForTwo = res?.costForTwo || "₹350";
    const imageUrl = res?.cloudinaryImageId || "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=300&fit=crop";

    return (
        <Link to={`/restaurants/${res.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="res-card">
                <img 
                    className="res-logo" 
                    src={imageUrl} 
                    alt={name}
                    onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                    }}
                />
                <div className="res-logo-placeholder" style={{ display: 'none' }}>
                    <span style={{ fontSize: '40px' }}>🍽️</span>
                </div>
                <h3>{name}</h3>
                <h3>⭐ {rating}</h3>
                <h3>{cuisines.length ? cuisines.join(", ") : ""}</h3>
                <h3>💰 {costForTwo}</h3>
                <h3>🕒 {deliveryTime} {typeof deliveryTime === "number" ? "mins" : ""}</h3>
            </div>
        </Link>
    );
}

export default RestaurantCard;