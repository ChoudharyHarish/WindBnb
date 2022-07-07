import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import Search from './Search'
// import { click } from "@testing-library/user-event/dist/click";

const buttonStyle = {
     color: "#EB5757" , 
     backgroundColor : "white",
     borderBottom : "red"
}



function Navbar(props) {

    const clicked = false;
    function handleClick(event){
    {props.addClick(clicked)};
       event.preventDefault();
    }
  
    return (
        <>
        <nav className="navbar">
            <div className="logo">
                <img src="logo.png" alt="" />
            </div>
            <div className="search-nav">
                <form>
                    <div className="location">
                        <input name = "locaion" type="text" placeholder="England" onClick={handleClick}/>
                    </div>
                    <div className="location">
                        <input type="text" placeholder="Add Guests" onClick={handleClick}/>
                    </div>
                    <div>
                        <button onClick={handleClick} ><SearchIcon sx={buttonStyle}/></button>
                    </div>
                </form>
            </div>   
        </nav>
        {clicked && <Search/>}
        </>
    )
}


export default Navbar