const parent = React.createElement("div", {id : "parent"}, 
React.createElement("div", {id : "child"}, 
[React.createElement("h1", {id: "h1"}, "I am an h1 tag!!"),
 React.createElement("h2", {id: "h2"}, "I am an h2 tag!!"), 
 React.createElement("h3", {id: "h3"}, "I am an h3 tag!!")]
));

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);