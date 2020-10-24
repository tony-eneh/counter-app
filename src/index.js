import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { store } from "./store";

// wrap rendering of app in a reusable function
const render = () => ReactDOM.render(<App />, document.getElementById("root"));

// re-render app on changes
store.subscribe(render);

// initial render
render();

registerServiceWorker();
