import React from "react";
import ContactInfo from "./../components/homeComponents/ContactInfo.js";
import Footer from "./../components/Footer.js";
import Header from "../components/Header.js";
import ShopSection from "../components/homeComponents/ShopSection.js";

const HomeScreen = ({match})=> {
    window.scrollTo(0,0);
    const keyword = match.params.keyword;
    return(
        <div>
            <Header />
            <ShopSection />
            <ContactInfo />
            <Footer />
        </div>
    );
};

export default HomeScreen;