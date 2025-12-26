import User from "./User";
import UserClass from "./UserClass";
const About=()=>{
    return(
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white shadow-sm p-10 mb-8 text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
                    <p className="text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        Welcome to our food ordering platform. We bring delicious meals from your favorite restaurants right to your doorstep.
                    </p>
                </div>
                <div className="bg-white shadow-sm p-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Our Team</h2>
                    <UserClass name={"Uday Kiran"} location={"Vishakapatnam"} contact={"9123456789"}/>
                </div>
            </div>
        </div>
    );
}

export default About;