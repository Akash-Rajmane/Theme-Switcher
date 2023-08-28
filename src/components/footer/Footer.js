import React,{useContext} from 'react';
import "./Footer.scss";
import {ThemeContext} from "../../App"

const Footer = () => {
const theme = useContext(ThemeContext);

  return (
    <footer className={ `footer-${theme}`}><h4>created by Akash Rajmane</h4></footer>
  )
}

export default Footer;