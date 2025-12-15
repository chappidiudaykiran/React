
import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = React.createElement("h1", {className: "head", id: "title"}, "Hello World from jsx🚀");

const Title = () => React.createElement("h1", null, "This is title react component");

const HeadingComponent = () => {
    return React.createElement(
        "div",
        null,
        React.createElement(Title, null),
        React.createElement("h1", null, "Hello from HeadingComponent")
    );
};

console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(HeadingComponent, null));
