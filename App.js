import React from "react";
import ReactDOM from "react-dom/client";


//React.createElement => Object => HTMLElement(render)

//const heading = React.createElement("h1", {id: "heading"}, "Namaste React 🚀");

//React Component
const TitleComponent = () => (
    <div className="head" tabIndex="5">
        <h1 id="heading">Namaste React 🚀 using JSX</h1>
    </div>
    );

    //React Element
    const elem = <span>React Element</span>

    const title = (
        <div className="head" tabIndex="5">   
            <h1 id="heading">{elem} Namaste React 🚀 using JSX</h1>
        </div>
        );

const HeadingComponent = () => (
    <div id="container">
        <TitleComponent />
        {title}
        <h1>Namaste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

