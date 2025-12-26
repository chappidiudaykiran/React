import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
    }

    state = {
        userInfo: {
            name: "Dummy Name",
            location: "Dummy Location",
            contact: "Dummy Contact",
            avatar_url: "https://avatars.githubusercontent.com",
        }
    }

    async componentDidMount(){
        // Simulating an API call
        const data = await fetch('https://api.github.com/users/chappidiudaykiran');
        const user = await data.json();
        this.setState({ userInfo: user });
        console.log("User Data Fetched:", user);
    }


    render(){
        const {name, location, avatar_url} = this.state.userInfo;
        return(
            <div className="flex flex-col items-center bg-white border border-gray-200 p-8">
                <img src={avatar_url} alt="User Avatar" className="w-28 h-28 rounded-full mb-4"/>
                <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
                <p className="text-sm text-gray-600">{location}</p>
            </div>
        )
    }   
}
export default UserClass;