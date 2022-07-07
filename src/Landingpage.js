import React from "react"


// function showRoom(location){
//     cardDetails.filter(obj => {return obj.location === location}).map(obj => { 
//         return <Card id = {index} imgUrl={obj.imgUrl} elite={obj.elite} description={obj.description} rating={obj.rating} detail={obj.detail} location = {obj.location}/>});
// }



function Landingpage() {
    return (
        <div className="landing-page">
            <div className="display">
                <h1>Stays in Finland</h1>
                <span className="stay">12+ Stays</span>
            </div>
        </div>
    )
}


export default Landingpage;
