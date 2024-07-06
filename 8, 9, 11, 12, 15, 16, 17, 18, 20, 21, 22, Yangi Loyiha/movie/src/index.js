import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import "./index.scss";//scss index scssdan import qilinishi kerak
import App from "./components/app/app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
