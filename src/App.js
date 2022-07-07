import React,{useState} from "react";
import Landingpage from "./Landingpage";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import Search from "./Search";
import SearchBar from "./SearchBar";
import Card from "./Card"
import cardDetails from "./cardDetails"

function App() {
  const locationsArray = cardDetails;
  const[arr,setArr] = useState(locationsArray);
  function filterLocation(locationValue){
    if(locationValue === "All")setArr(arr.filter(obj => obj));
    else {setArr(arr.filter(obj => obj.location === locationValue))};
  }

  function setLocation(){
      setArr(cardDetails);
  }

  const[clicked , setClick] = useState(false);
    function handleClick(clicked){
    setClick(!clicked);
  }
  return (
    <>

      {clicked ? <SearchBar addClick = {handleClick} filterLocation = {filterLocation} setLocation = {setLocation}/> : <Navbar addClick = {handleClick}/>}
      <Landingpage filterLocation = {filterLocation}/>
      <div className="container">
      {arr.map((obj,index) => {
        return <Card id = {index} imgUrl={obj.imgUrl} elite={obj.elite} description={obj.description} rating={obj.rating} detail={obj.detail} location = {obj.location}/>
                })}
            </div>
      <Footer/>
      </>
  );

}

export default App;
