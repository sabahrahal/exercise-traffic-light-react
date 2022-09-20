import React,{useState} from "react";

export const TrafficLight = ()=>{
    
    const [color, setColor] = useState(""); 

    function handleColor(event){
        let element = event.target.id;
        setColor(element); 
    }

    return(
        <div className="container-complete">
                <div className="stick-light-box"></div>
                    <div className="container-trafficLight" onClick={handleColor}>
                        <div id="green" className={`green-light light ${color === 'green' ? 'active' : ""}`}></div>
                        <div id="yellow" className={`yellow-light light ${color === 'yellow' ? 'active' : ""}`}></div>
                        <div id="red" className={`red-light light ${color === 'red' ? 'active' : ""}`}></div>
                     </div>
        </div>
    );
};