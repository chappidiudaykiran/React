import { useEffect, useState } from "react";
import { MOCK_MENU_DATA } from "../utils/mockData";

const useRestaurantMenu = (id) => {
    const [menuData, setMenuData] = useState(null);

    useEffect(() => {
        if (!id) return;
        const timer = setTimeout(() => {
            const menu = MOCK_MENU_DATA[id];
            if (menu) {
                setMenuData(menu);
            } else {
                setMenuData({
                    restaurant: {
                        name: "Restaurant",
                        cuisines: ["Multi-Cuisine"],
                        costForTwo: "₹350 for two",
                        avgRating: "4.0",
                        location: "Bangalore"
                    },
                    menu: [
                        {
                            category: "Menu",
                            items: [
                                { id: 1, name: "Special Dish", price: 199, description: "Chef's special", isVeg: true }
                            ]
                        }
                    ]
                });
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [id]);

    return menuData;
};

export default useRestaurantMenu;