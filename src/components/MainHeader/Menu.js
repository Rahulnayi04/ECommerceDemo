import react from "react";
import { ReactDOM } from "react";
import "./Menu.css"
import "font-awesome/css/font-awesome.min.css"
const Menu = props => {
    return (
            <div className="overlay">
                <div onClick={props.onMenuCloseClick} className="space"><span>Close menu  <i className="fa fa-close"></i></span></div>
                <div className="space"><span>Categories</span></div>
                <div className="space"><span>Makeup</span></div>
            </div>
        )
}
export default Menu;