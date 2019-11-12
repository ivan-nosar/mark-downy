import * as React from "react";
import * as ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";

// Create main element
const mainElement = document.createElement("div");
document.body.appendChild(mainElement);

const click = () => {
    alert("Click!");
};

// Render app content
ReactDOM.render(
    <Button variant="contained" color="primary" onClick={click}>
        Hello World!!!
    </Button>,
    mainElement
);
