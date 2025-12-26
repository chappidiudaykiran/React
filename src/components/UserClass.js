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
            <div className="user-card">
                <img src={avatar_url} alt="User Avatar" style={{width:"150px", height:"150px", borderRadius:"75px"}}/>
                <h2>Name:{name}</h2>
                <h3>Location:{location}</h3>
            </div>
        )
    }   
}
export default UserClass;