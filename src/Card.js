import React from "react"
import StarIcon from '@mui/icons-material/Star';

function Card(props){
return(
    <div className="card">
        <div className="img-section">
             <img src = {props.imgUrl} className="img-resp" alt="" />
        </div>
        <div className="text-section">
        <div className="row1">
            <span className="elite">{props.elite}</span>
            <span className="info-rating">{props.description}</span>
            <span className="info-rating"><StarIcon sx = {{color:"#EB5757", fontSize: "15px"}}/>{props.rating}</span>
        </div>
            <p className="para">{props.detail}</p>
        </div>

    </div>
)

}

export default Card;