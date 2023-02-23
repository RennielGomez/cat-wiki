import catWikiLogo from "../assets/CatwikiLogo.svg";
import React from 'react';
import { Link } from "react-router-dom";

function Logo() {
    return (<Link to={'/'}>
        <img src={catWikiLogo} alt="CatWiki Logo" />
    </Link>
    )
}

export default Logo