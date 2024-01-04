import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "h1" }, "This is Namaste React"),
    React.createElement("h2", { id: "h2" }, "I am an h2 tag!!"),
    React.createElement("h3", { id: "h3" }, "I am an h3 tag!!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "h11" }, "I am an h1 tag!!"),
    React.createElement("h2", { id: "h21" }, "I am an h2 tag!!"),
    React.createElement("h3", { id: "h31" }, "I am an h3 tag!!"),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
