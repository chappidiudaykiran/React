
import React from "react";
import ReactDOM from "react-dom/client";
/*
Header
   -Logo
   -Nav Items
Body
    -Search
    -Restaurant Container
      -RestaurantCard
        -Img
        -Name of Restaurant,star Rating,cuisine,delery tie
Footer
    -Copyright
    -Links
    -Address
    -contant
*/
const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwu9g4FoWomu0D-CjdueRug6O1erxoG7wNP-zsiEoGzQ&s" alt="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>  
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const RestaurantCard=(props)=>{
    return(
        <div className="res-card">
            <img className="res-logo" src="https://www.maggiarabia.com/sites/default/files/styles/srh_recipes/public/srh_recipes/30c29da8aec1403f42e82552d927abab.png?h=4f5b30f1&itok=7l1fu_HB" alt="res-logo"/>
            <h3>{props.resName}</h3>
            <h3>4.5 Stars</h3>
            <h3>{props.cuisine}</h3>
            <h3>30 mins</h3>
        </div>
    )
}
const Body=()=>{
    return(
        <div className="body">
            <div className="search">
                search
            </div>
            <div className="res-container">
                <RestaurantCard resName="Uday Foods" cuisine="North Indian, Chinese"/>
                <RestaurantCard resName="KFC" cuisine="Burger,Fast Food"/>
            </div>
        </div>
    )
}
const Footer=()=>{
    return(
        <div className="footer">
            This is Footer
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
