import React,{useContext} from 'react';
import "./Content.scss";
import {ThemeContext} from "../../App";

const Content = () => {
const theme = useContext(ThemeContext);

return (
    <main className={`content-${theme}`}>
        <h3>Lorem Ipsum</h3>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt, lorem id malesuada scelerisque, sem ipsum aliquam eros, ut consequat orci ipsum eget mi. Nulla facilisi. Cras non nunc at tortor ultricies placerat. Cras facilisis sem ut tellus lacinia, sed facilisis nibh dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer auctor massa non est sodales molestie. Sed a augue sed risus mollis viverra at sit amet tellus. Cras nec pharetra nisi, id fringilla leo. Suspendisse placerat imperdiet est a iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ac nisl molestie, tincidunt sapien vel, gravida neque. Aenean mattis faucibus vulputate. Ut malesuada quis ante et sodales. Sed euismod neque eu nibh vehicula pretium.
        </p>
    </main>
  )
}

export default Content;