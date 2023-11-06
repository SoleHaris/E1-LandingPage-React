import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import App from "./App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <GlobalStyles />
        <App />
    </>
)