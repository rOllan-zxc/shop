import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../Redux/Actions/userActions";
import {Link, useHistory} from "react-router-dom";

const Header = () => {
    const [keyword, setKeyword] = useState();
    const dispatch = useDispatch();
    let history = useHistory();


    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo} = userLogin;

    const logoutHandler = () => {
        dispatch(logout());
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            history.push(`/search/${keyword}`);
        } else {
            history.push("/");
        }
    };
    return (
        <div>
            {/* Top Header */}
            <div className="Announcement ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center display-none">
                            <p>+375 29 221 73 48</p>
                            <p>info@shop.com</p>
                        </div>
                        <div className=" col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center">
                            <Link to="#">
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link to="#">
                                <i className="fab fa-instagram"></i>
                            </Link>
                            <Link to="#">
                                <i className="fab fa-linkedin-in"></i>
                            </Link>
                            <Link to="#">
                                <i className="fab fa-youtube"></i>
                            </Link>
                            <Link to="#">
                                <i className="fab fa-pinterest-p"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header */}
            <div className="header">
                <div className="container">
                    <div className="pc-header">
                        <div className="row">
                            <div className="col-md-3 col-4 d-flex align-items-center">
                                <Link className="navbar-brand" to="/">
                                    <img alt="logo" src="/images/logo.png"/>
                                </Link>
                            </div>
                            <div className="col-md-6 col-8 d-flex align-items-center">
                                <form onSubmit={submitHandler} className="input-group">
                                    <input
                                        type="search"
                                        className="form-control rounded search"
                                        placeholder="Search"
                                        onChange={(e) => setKeyword(e.target.value)}
                                    />
                                    <button type="submit" className="search-button">
                                        search
                                    </button>
                                </form>
                            </div>
                            <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
                                {userInfo ? (
                                    <div className="btn-group">
                                        <button
                                            type="button"
                                            className="name-button dropdown-toggle"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Hi, {userInfo.name}
                                        </button>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="#">
                                                Profile
                                            </Link>

                                            <Link
                                                className="dropdown-item"
                                                to="#"
                                                onClick={logoutHandler}
                                            >
                                                Logout
                                            </Link>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <Link to="/register">Register</Link>
                                        <Link to="/login">Login</Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;