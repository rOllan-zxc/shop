import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {userLoginReducer,  userRegisterReducer,} from "./Reducers/userReducers.js";
import app from "../App";
import {productListReducer} from "./Reducers/ProductReducers";

const reducer = combineReducers({
    productList : productListReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer
});

// login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

const initialState = {
    userLogin: { userInfo: userInfoFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;