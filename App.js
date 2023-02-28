import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <h1 id="title" key="h2">
        Namaste React
    </h1>
);
// const heading1 = React.createElement("h1", {
//     id: "title",
//     key:"h1"
// }, "Heading one from parcel");
// console.log("hrading",heading1);
// const heading2 = React.createElement("h2", {
//     id: "title",
//     key:"h2"
// }, "Heading two");

// const container = React.createElement("div", {
//     id: "container",
//     hello:"world"
// }, [heading1, heading2]); // pass children

// // console.log(heading);
// const heading = <h1 id="title" key="h2" className="container">Namaste React !!!</h1>

const HeaderComponent = () => (
   
        <div>
            <Title />
            <h2>Namaste React functional component</h2>
        </div>
    
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<HeaderComponent />);