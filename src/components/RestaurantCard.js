const RestaurantCard = ({ res }) => {
    if (!res) return null;
    return (
        <div className="res-card">
            <img className="res-logo" src={res.imgUrl} alt={res.name} />
            <h3>{res.name}</h3>
            <h3>{res.rating}</h3>
            <h3>{res.cuisines}</h3>
            <h3>{res.time}</h3>
        </div>
    );
}

export default RestaurantCard;