import React,{useContext} from 'react';
import "./Header.scss";
import {ThemeContext} from "../../App"

const Header = () => {
const theme = useContext(ThemeContext);

return (
    <header className={`header-${theme}`}>
        <h1>Theme Switcher</h1>
    </header>
  )
}

export default Header;