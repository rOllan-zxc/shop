import React from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.js";
// import SingleProduct from "./screens/SingleProduct";
import Login from "./screens/Login.js";
import Register from "./screens/Register.js";
import NotFound from "./screens/NotFound.js";

const App = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" component={HomeScreen} exact />
                {/*<Route path="/products/:id" element={<SingleProduct/>} />*/}
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    )
}

export default App;