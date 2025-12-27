import { useEffect, useState } from "react";
import { MOCK_MENU_DATA } from "../utils/mockMenuData";
import { MOCK_RESTAURANTS } from "../utils/mockData";

const useRestaurantMenu = (id) => {
    const [menuData, setMenuData] = useState(null);

    const fallbackRestaurant = {
        name: "Restaurant",
        cuisines: ["Multi-Cuisine"],
        costForTwo: "₹350 for two",
        avgRating: "4.0",
        location: "Bangalore"
    };

    const fallbackMenu = [
        {
            category: "Menu",
            items: [
                { id: 1, name: "Special Dish", price: 199, description: "Chef's special", isVeg: true }
            ]
        }
    ];

    useEffect(() => {
        if (!id) return;
        const timer = setTimeout(() => {
            const restaurant = MOCK_RESTAURANTS.find((res) => res.id === id);
            const menuEntry = MOCK_MENU_DATA[id];

            const restaurantMeta = restaurant
                ? {
                      name: restaurant.name,
                      cuisines: restaurant.cuisines,
                      costForTwo: restaurant.costForTwo
                          ? `${restaurant.costForTwo} for two`
                          : fallbackRestaurant.costForTwo,
                      avgRating: restaurant.avgRating || fallbackRestaurant.avgRating,
                      location: restaurant.location || fallbackRestaurant.location
                  }
                : menuEntry?.restaurant || fallbackRestaurant;

            setMenuData({
                restaurant: restaurantMeta,
                menu: menuEntry?.menu || fallbackMenu
            });
        }, 500);

        return () => clearTimeout(timer);
    }, [id]);

    return menuData;
};

export default useRestaurantMenu;