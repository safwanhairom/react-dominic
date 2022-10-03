import React from "react";

function Footer () {

    const currentYear =  new Date().getFullYear();

    return <p>
    <footer>
        Copyright © {currentYear} -Tanjak7Tech-
        </footer>
    </p>
}

export default Footer;