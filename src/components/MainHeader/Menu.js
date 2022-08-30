import react, { useState } from "react";
import { ReactDOM } from "react";
import "./Menu.css"
import "font-awesome/css/font-awesome.min.css"

const Menu = props => {
    const [showMakeup, setShowMakeup] = useState(false)
    const [showMakeupOptions, setshowMakeupOptions] = useState(false)
    const showMakeups = () => {
        if(showMakeup) {setShowMakeup(false)}
        else {setShowMakeup(true)}
        if(showMakeupOptions) {setshowMakeupOptions(false)}
    }
    
    const showMakeupOptionsList = () => {
        if(showMakeupOptions) {setshowMakeupOptions(false)}
        else {setshowMakeupOptions(true)}
    }

    return (
            <div className="overlay">
                <div onClick={props.onMenuCloseClick} className="space"><span>Close menu <i className="fa fa-close"></i></span></div>
                <div className="space"onClick={showMakeups}><span>Categories</span></div>
                {showMakeup && (
                    <div style={{cursor:'default', fontSize:'15px' }} >
                    <div className="space" onClick={showMakeupOptionsList}><li>Makeup</li></div>
                    </div> 
                    )
                }
                {showMakeupOptions && (
                    <div style={{cursor:'default', fontSize:'15px' }} >
                    <ol>
                    <div className="space"><li>Face Makeup</li></div>
                    <div className="space"><li>Lip Makeup</li></div>
                    <div className="space"><li>Eye Makeup</li></div>
                    <div className="space"><li>Brushes and tools</li></div>
                    </ol>
                    </div> 
                    )
                }
            </div>
        )
}
export default Menu;
