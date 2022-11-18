import React from "react";
import ContactInfo from "./../components/homeComponents/ContactInfo.js";
import Footer from "./../components/Footer.js";
import Header from "../components/Header.js";

const HomeScreen = ()=> {
    return(
        <div>
            <Header />
            <ContactInfo />
            <Footer />
        </div>
    );
};

export default HomeScreen;