import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { id } = useParams();
    const menuData = useRestaurantMenu(id);

    if (!menuData) {
        return <div className="Menu">Loading...</div>;
    }

    return (
        <div className="Menu">
            <h1>{menuData.restaurant?.name}</h1>
            <p>{menuData.restaurant?.cuisines?.join(", ")} | {menuData.restaurant?.avgRating}⭐ | {menuData.restaurant?.costForTwo}</p>
            <p>📍 {menuData.restaurant?.location}</p>

            {menuData.menu?.map((category, index) => (
                <div key={index}>
                    <h3>{category.category}</h3>
                    <ul>
                        {category.items?.map((item) => (
                            <li key={item.id}>
                                <strong>{item.name}</strong> {item.isVeg ? "🟢" : "🔴"} - ₹{item.price}
                                <p style={{ fontSize: "14px", color: "#666" }}>{item.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default RestaurantMenu;