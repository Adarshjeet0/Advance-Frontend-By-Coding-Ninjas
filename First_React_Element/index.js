const reactElement = React.createElement("h1",{className:"heading"}, "This is a heading");
ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
console.log("This is react element:",reactElement);