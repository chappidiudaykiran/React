import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { id } = useParams();
    const menuData = useRestaurantMenu(id);

    if (!menuData) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <div className="text-center">
                    <div className="animate-spin text-6xl mb-4">🍽️</div>
                    <p className="text-lg text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-3xl mx-auto">
                {/* Restaurant Header */}
                <div className="bg-white shadow-sm p-6 mb-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-3">{menuData.restaurant?.name}</h1>
                    <div className="flex items-center gap-3 text-sm mb-2">
                        <span className="font-semibold" style={{color: '#48c479'}}>
                            ★ {menuData.restaurant?.avgRating}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-600">{menuData.restaurant?.costForTwo}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{menuData.restaurant?.cuisines?.join(", ")}</p>
                    <p className="text-sm text-gray-500">{menuData.restaurant?.location}</p>
                </div>

                {/* Menu Categories */}
                {menuData.menu?.map((category, index) => (
                    <div key={index} className="bg-white shadow-sm p-6 mb-4">
                        <h3 className="text-lg font-bold text-gray-800 mb-4 pb-3 border-b">{category.category}</h3>
                        <div className="space-y-6">
                            {category.items?.map((item) => (
                                <div key={item.id} className="flex justify-between items-start pb-6 border-b last:border-0 last:pb-0">
                                    <div className="flex-1">
                                        <div className="flex items-start gap-2 mb-2">
                                            <span className="text-xs mt-1" style={{color: item.isVeg ? '#0f8a65' : '#e43b4f'}}>
                                                {item.isVeg ? "🟢" : "🔴"}
                                            </span>
                                            <div>
                                                <h4 className="font-medium text-gray-800 text-base">{item.name}</h4>
                                                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                                                <p className="text-sm font-semibold text-gray-800 mt-2">₹{item.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="ml-4 px-8 py-2 border border-gray-300 text-[#fc8019] font-semibold hover:bg-gray-50 transition-colors text-sm uppercase">Add</button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RestaurantMenu;