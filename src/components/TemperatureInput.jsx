import React,{useState} from "react";

function TemperatureInput({celsius, onChange}) {
    return(
        <div>
            <label> Enter temperature in celsius:</label>
            <input
            type="number"
            value={celsius}
            onChange={(e)=> onChange(Number(e.target.value))}
            />
        </div>
    );
    
}
export default TemperatureInput