import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MOCK_MENU_DATA } from "../utils/mockData";

const RestaurantMenu=()=>{
    const [menuData, setMenuData] = useState(null);
    const { id } = useParams();

    useEffect(()=>{
        fetchMenu();
    },[id]);

    const fetchMenu=async()=>{
        // Using mock data instead of API call
        // Simulating API delay
        setTimeout(() => {
            const menu = MOCK_MENU_DATA[id];
            if (menu) {
                setMenuData(menu);
                console.log(menu);
            } else {
                // If no specific menu, create a basic one
                setMenuData({
                    restaurant: {
                        name: "Restaurant",
                        cuisines: ["Multi-Cuisine"],
                        costForTwo: "₹350 for two",
                        avgRating: "4.0",
                        location: "Bangalore"
                    },
                    menu: [{
                        category: "Menu",
                        items: [
                            { id: 1, name: "Special Dish", price: 199, description: "Chef's special", isVeg: true }
                        ]
                    }]
                });
            }
        }, 500);
    }

    if (!menuData) {
        return <div className="Menu">Loading...</div>;
    }

    return(
        <div className="Menu">
            <h1>{menuData.restaurant.name}</h1>
            <p>{menuData.restaurant.cuisines.join(", ")} | {menuData.restaurant.avgRating}⭐ | {menuData.restaurant.costForTwo}</p>
            <p>📍 {menuData.restaurant.location}</p>
            
            {menuData.menu.map((category, index) => (
                <div key={index}>
                    <h3>{category.category}</h3>
                    <ul>
                        {category.items.map((item) => (
                            <li key={item.id}>
                                <strong>{item.name}</strong> {item.isVeg ? "🟢" : "🔴"} - ₹{item.price}
                                <p style={{fontSize: "14px", color: "#666"}}>{item.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
export default RestaurantMenu;