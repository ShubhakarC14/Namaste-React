const heading1 = React.createElement("h1", {
    id: "title"
}, "Heading one");
const heading2 = React.createElement("h2", {
    id: "title"
}, "Heading two");

const container = React.createElement("div", {
    id: "container"
}, [heading1, heading2]); // pass children

// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(container);