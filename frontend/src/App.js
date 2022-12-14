import React from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.js";
import Login from "./screens/Login.js";
import Register from "./screens/Register.js";
import NotFound from "./screens/NotFound.js";
import SingleProduct from "./screens/SingleProduct";
import CartScreen from "./screens/CartScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PrivateRouter from "./PrivateRouter";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";

const App = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" component={HomeScreen} exact />
                <Route path="/products/:id" component={SingleProduct} />
                <PrivateRouter path="/cart/:id?" component={CartScreen} />
                <PrivateRouter path="/shipping" component={ShippingScreen} />
                <PrivateRouter path="/payment" component={PaymentScreen} />
                <PrivateRouter path="/placeorder" component={PlaceOrderScreen} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <PrivateRouter path="/profile" component={ProfileScreen} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    )
}

export default App;