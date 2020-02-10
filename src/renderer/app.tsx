import * as React from "react";
import * as ReactDOM from "react-dom";
import { Application } from "./components/application";

// Create the root element of UI
const mainElement = document.createElement("div");
document.body.appendChild(mainElement);

// Render app content
ReactDOM.render(
    <Application />,
    mainElement
);
