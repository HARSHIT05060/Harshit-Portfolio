import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, scrollToSection, scrollToTop }) => {
    return (
        <>
            <Header scrollToSection={scrollToSection} />
            {children}
            <Footer scrollToSection={scrollToSection} scrollToTop={scrollToTop} />
        </>
    );
};

export default Layout;
