import React from "react"
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import cardDetails from "./cardDetails";
// import Landingpage from "./Landingpage";



function Location(props){
    function handleClick(event){
        const string = event.target.getInnerHTML();
        console.log(string);
        props.showHotel(string);
}
    
    return(
        <>
        <div className="container-location" onClick={handleClick}>
        <span><LocationOnIcon/></span>
        <p>{props.title}</p>
        </div>
        </>
    )
}

export default Location;