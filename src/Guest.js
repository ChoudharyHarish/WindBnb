import React,{useState} from "react"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


function Guest(props){

    let [count,setCount] = useState(0);

    function add(){
        setCount(count + 1);
        props.updateGuest(count + 1);
    }
    function minus(){
        setCount(count - 1);
        props.updateGuest(count - 1);

    }

        return (
            <>  
                <div className="guest-container">
                <div className="calc-1">
                <h4>{props.title}</h4>
                <h5>{props.description}</h5>
                <div className="calc">
                <span onClick={minus} className = "icon"><RemoveIcon/></span>
                <span className="count">{count}</span>
                <span onClick={add} className = "icon"><AddIcon/></span>
                </div>
                </div>
                </div>
            </>
        )

}


export default Guest;