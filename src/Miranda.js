import React from 'react'
import {mirandaData} from './dataz'

export const Miranda =() => {
    return (
        <>
          <div className="stock-container"> 
           {mirandaData.map((data, key)=>{
               return (
                   <div key={key}>
                     <input type="text" value = {data.script + ", " +
                        data.miranda_No + ", " +
                        data.miranda_Script_No + ", " +
                        data.miranda_Name + ", " +
                        data.true_Script + ", " +
                        data.false_Script + ", "}></input>
                        </div>
               );
           })}
          </div>  
        </>
    );
};

