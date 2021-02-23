import '../Styles/Header.css'
import React from 'react'


const Header = ({formOfPopulation, name}) => {
    return (
        <h3 id="header">{formOfPopulation} Name is: {name}</h3>
    );
};

export default Header;