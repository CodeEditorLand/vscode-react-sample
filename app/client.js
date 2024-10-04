import React from "react"; // necessary to import for compilation
import ReactDOM from "react-dom";

import App from "./components/App";

require("./globals.scss");

ReactDOM.render(<App />, document.getElementById("app"));
