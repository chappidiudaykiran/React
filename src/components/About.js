import User from "./User";
import UserClass from "./UserClass";
const About=()=>{
    return(
        <div>
            <h1>About Us Page</h1>
            <p>This is the About Us page of our application.</p>
            <User name={"Uday Kiran"} location={"Vishakapatnam"} contact={"9123456789"}/>
            <UserClass name={"Uday Kiran"} location={"Vishakapatnam"} contact={"9123456789"}/>
        </div>
    );
}

export default About;