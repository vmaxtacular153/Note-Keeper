import React from "react";

const d = new Date();
const year = d.getFullYear();

function Footer() {
    return <div>
    <footer>
        <p>Copywrite © {year} </p>
    </footer>
</div>
}

export default Footer;