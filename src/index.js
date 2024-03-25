import React from "react";
import ReactDOM from "react-dom/client";
// import ReactDOM from "react-dom";

import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import { Provider } from "react-redux";

import App from "./App";
import store from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
//   <React.StrictMode>
//     <Router><Provider store={store}><App /></Provider></Router>
//   </React.StrictMode>
    <Router>
        <Provider store={store}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>
    </Router>
)
// ReactDOM.render( <Router><Provider store={store}><App /></Provider></Router>, document.getElementById("root"));