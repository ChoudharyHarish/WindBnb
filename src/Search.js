import React,{useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
// import Location from "./Location"
// import Guest from "./Guest"


// import LocationOnIcon from '@mui/icons-material/LocationOn';


// const buttonStyle = {
//     color: "#EB5757" , 
//     backgroundColor : "white",
//     borderBottom : "red"
// }

// const locations = [
//     "Helsinki,Finalnd",
//     "Turku,Finland",
//     "Oulu,Finland",
//     "Vassa,Finland"];

// const object = [
//     {   
//         title : "Adults",
//         age : "Age 13 or above"
//     },
//     {   
//         title : "Children",
//         age : "Age 2 - 12"
//     },
//     ]

function Search(props){
    const clicked = true;
    function handleClick(event){
       {props.addClick(clicked)};
       event.preventDefault();
    }
    const [inputName,setInputName] = useState("");
    function autoSuggestion(event){
        const {name} = event.target;
        setInputName(name);
        event.preventDefault();
    }
    return(
        <>
        <div className="search-form">
        <form>
                   <div className="search">
                       <div className="input">
                           <span className="search-span">Location</span>
                           <input type="text" name="location" id="" placeholder="England" onChange={autoSuggestion}/>
                       </div>
                       <div className="input">
                           <span className="search-span">Guest</span>
                           <input type="text" name="guest" id="" placeholder="Add Guests" onClick={autoSuggestion}/>
                       </div>
                       <button className="search-button" onClick={handleClick}><SearchIcon/>Search</button>
                   </div>
        </form> 
        
        {/* {inputName === "location" && locations.map(item => <Location title = {item}/>)}
        {inputName === "guest" && object.map(obj => <Guest title = {obj.title} description = {obj.age}/>)} */}
        </div>
    </>
    )
}


export default Search;