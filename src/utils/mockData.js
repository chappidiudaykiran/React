// Mock data for 20 restaurants
export const MOCK_RESTAURANTS = [
  {
    id: "1",
    name: "Pizza Paradise",
    promoted: true,
    cloudinaryImageId: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=300&fit=crop",
    cuisines: ["Pizza", "Italian", "Fast Food"],
    avgRating: "4.5",
    costForTwo: "₹400",
    sla: { deliveryTime: 30 },
    location: "Indiranagar, Bangalore"
  },
  {
    id: "2",
    name: "Burger Kingdom",
    promoted: false,
    cloudinaryImageId: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=300&fit=crop",
    cuisines: ["Burgers", "American", "Fast Food"],
    avgRating: "4.3",
    costForTwo: "₹300",
    sla: { deliveryTime: 25 },
    location: "Koramangala, Bangalore"
  },
  {
    id: "3",
    name: "Biryani House",
    promoted: true,
    cloudinaryImageId: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&h=300&fit=crop",
    cuisines: ["Biryani", "Mughlai", "North Indian"],
    avgRating: "4.7",
    costForTwo: "₹500",
    sla: { deliveryTime: 35 },
    location: "HSR Layout, Bangalore"
  },
  {
    id: "4",
    name: "Dosa Corner",
    promoted: false,
    cloudinaryImageId: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=500&h=300&fit=crop",
    cuisines: ["South Indian", "Breakfast", "Snacks"],
    avgRating: "4.6",
    costForTwo: "₹200",
    sla: { deliveryTime: 20 },
    location: "Jayanagar, Bangalore"
  },
  {
    id: "5",
    name: "Chinese Wok",
    promoted: false,
    cloudinaryImageId: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=500&h=300&fit=crop",
    cuisines: ["Chinese", "Asian", "Thai"],
    avgRating: "4.2",
    costForTwo: "₹350",
    sla: { deliveryTime: 28 },
    location: "Whitefield, Bangalore"
  },
  {
    id: "6",
    name: "Sushi Station",
    promoted: true,
    cloudinaryImageId: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&h=300&fit=crop",
    cuisines: ["Japanese", "Sushi", "Asian"],
    avgRating: "4.8",
    costForTwo: "₹800",
    sla: { deliveryTime: 40 },
    location: "MG Road, Bangalore"
  },
  {
    id: "7",
    name: "Taco Bell",
    promoted: false,
    cloudinaryImageId: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&h=300&fit=crop",
    cuisines: ["Mexican", "Fast Food", "Tex-Mex"],
    avgRating: "4.1",
    costForTwo: "₹400",
    sla: { deliveryTime: 30 },
    location: "Brigade Road, Bangalore"
  },
  {
    id: "8",
    name: "Pasta Italiano",
    promoted: true,
    cloudinaryImageId: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&h=300&fit=crop",
    cuisines: ["Italian", "Pasta", "Continental"],
    avgRating: "4.4",
    costForTwo: "₹600",
    sla: { deliveryTime: 35 },
    location: "Marathahalli, Bangalore"
  },
  {
    id: "9",
    name: "Sandwich Hub",
    promoted: false,
    cloudinaryImageId: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&h=300&fit=crop",
    cuisines: ["Sandwiches", "Cafe", "Fast Food"],
    avgRating: "4.0",
    costForTwo: "₹250",
    sla: { deliveryTime: 15 },
    location: "Electronic City, Bangalore"
  },
  {
    id: "10",
    name: "Curry Express",
    promoted: false,
    cloudinaryImageId: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&h=300&fit=crop",
    cuisines: ["North Indian", "Curry", "Tandoor"],
    avgRating: "4.5",
    costForTwo: "₹450",
    sla: { deliveryTime: 32 },
    location: "BTM Layout, Bangalore"
  },
  {
    id: "11",
    name: "BBQ Nation",
    promoted: true,
    cloudinaryImageId: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&h=300&fit=crop",
    cuisines: ["BBQ", "Grill", "North Indian"],
    avgRating: "4.6",
    costForTwo: "₹900",
    sla: { deliveryTime: 45 },
    location: "Bellandur, Bangalore"
  },
  {
    id: "12",
    name: "Ice Cream Factory",
    promoted: false,
    cloudinaryImageId: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&h=300&fit=crop",
    cuisines: ["Desserts", "Ice Cream", "Beverages"],
    avgRating: "4.3",
    costForTwo: "₹200",
    sla: { deliveryTime: 20 },
    location: "Malleshwaram, Bangalore"
  },
  {
    id: "13",
    name: "Healthy Bowl",
    promoted: false,
    cloudinaryImageId: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=300&fit=crop",
    cuisines: ["Healthy Food", "Salads", "Juices"],
    avgRating: "4.4",
    costForTwo: "₹350",
    sla: { deliveryTime: 25 },
    location: "Sarjapur Road, Bangalore"
  },
  {
    id: "14",
    name: "Momos Mania",
    promoted: true,
    cloudinaryImageId: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&h=300&fit=crop",
    cuisines: ["Momos", "Chinese", "Street Food"],
    avgRating: "4.2",
    costForTwo: "₹150",
    sla: { deliveryTime: 22 },
    location: "Bannerghatta Road, Bangalore"
  },
  {
    id: "15",
    name: "French Bakery",
    promoted: false,
    cloudinaryImageId: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&h=300&fit=crop",
    cuisines: ["Bakery", "Desserts", "French"],
    avgRating: "4.7",
    costForTwo: "₹500",
    sla: { deliveryTime: 30 },
    location: "Ulsoor, Bangalore"
  },
  {
    id: "16",
    name: "Kebab Corner",
    promoted: true,
    cloudinaryImageId: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&h=300&fit=crop",
    cuisines: ["Kebabs", "Mughlai", "Rolls"],
    avgRating: "4.5",
    costForTwo: "₹400",
    sla: { deliveryTime: 28 },
    location: "Residency Road, Bangalore"
  },
  {
    id: "17",
    name: "Noodle Bar",
    promoted: false,
    cloudinaryImageId: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&h=300&fit=crop",
    cuisines: ["Noodles", "Asian", "Thai"],
    avgRating: "4.1",
    costForTwo: "₹300",
    sla: { deliveryTime: 26 },
    location: "Rajajinagar, Bangalore"
  },
  {
    id: "18",
    name: "Paratha Junction",
    promoted: false,
    cloudinaryImageId: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&h=300&fit=crop",
    cuisines: ["North Indian", "Parathas", "Breakfast"],
    avgRating: "4.3",
    costForTwo: "₹250",
    sla: { deliveryTime: 24 },
    location: "Kalyan Nagar, Bangalore"
  },
  {
    id: "19",
    name: "Seafood Delight",
    promoted: false,
    cloudinaryImageId: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/4482810d-f84a-40fa-bde3-ca4d87f6aefd.jpg",
    cuisines: ["Seafood", "Coastal", "Fish"],
    avgRating: "4.6",
    costForTwo: "₹700",
    sla: { deliveryTime: 42 },
    location: "Frazer Town, Bangalore"
  },
  {
    id: "20",
    name: "Veg Thali",
    promoted: true,
    cloudinaryImageId: "https://img.freepik.com/premium-photo/indian-hindu-veg-thali-food-platter-selective-focus_466689-35931.jpg?semt=ais_hybrid&w=740&q=80",
    cuisines: ["North Indian", "Thali", "Vegetarian"],
    avgRating: "4.4",
    costForTwo: "₹300",
    sla: { deliveryTime: 30 },
    location: "JP Nagar, Bangalore"
  }
];
