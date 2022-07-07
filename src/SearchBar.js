import React,{useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
import Location from "./Location"
import Guest from "./Guest"
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

const locations = [
    "All",
    "Helsinki,Finland",
    "Turku,Finland",
    "Oulu,Finland",
    "Vassa,Finland"];

const object = [
    {   
        title : "Adults",
        age : "Age 13 or above"
    },
    {   
        title : "Children",
        age : "Age 2 - 12"
    },
    ]

function SearchBar(props){
    const clicked = true;
    function handleClick(event){
       {props.addClick(clicked)};
       event.preventDefault();
    }
    const[guest, setGuest] = useState("Add Guests");
    function updateGuest(count){
    setGuest(count);
    }

    function searchLocation() {
    props.filterLocation();
    }
    return(
        <>
        <div className="search-form">
        <span className="closeIcon" onClick={handleClick}><CancelPresentationIcon/></span>
        <form>
        <div className="search" onClick={props.setLocation}>
            <div className="input">
                <span className="search-span">Location</span>
                <input type="text" name="location" id="" placeholder="England"/>
            </div>
            <div className="input">
                <span className="search-span">Guest</span>
                <input type="text" name="guest" id="" placeholder="Add Guests" value={guest}/>
            </div>
            <button className="search-button" onClick = {searchLocation}><SearchIcon/>Search</button>
        </div>
        </form>
        <div className="form-container">
        <div className="location-container">
            {locations.map(item => <Location title = {item} showHotel = {props.filterLocation} setLocation = {props.setLocation}/>)}
            </div>
            <div className="person-container">
                {object.map(obj => <Guest title = {obj.title} description = {obj.age} updateGuest = {updateGuest}/>)}
            </div>
        </div>
        </div> 
        </>
    )
}

export default SearchBar;