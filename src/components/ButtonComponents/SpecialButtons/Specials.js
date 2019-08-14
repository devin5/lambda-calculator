import React, {useState} from "react";

//import any components needed
import SpecialButton from "./SpecialButton"; 
//Import your array data to from the provided data file
import {specials} from "../../../data";
const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specialsState, setSpecialsState] = useState(specials); 

  const onSpecialButtonClick = special => {
    console.log("I am in Specials.js's onSpecialButtonClick(). special: " + special); 

    if(special == "C"){
      props.clearDisplay("0"); 
    }else if(special === "+/-"){
      props.plusEqual(); 
    }else if(special === "%" ){
      props.updateDisplayNum(special); 
    }else{
      console.log("Code should not go here. Invalid special"); 
      props.updateDisplayNum(special); 
    }
  };

  return (
    
    <div className="specialContainer">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {
         specialsState.map((special, index) => (
            <SpecialButton index={index} special={special} specialButtonClick={()=> {
              onSpecialButtonClick(special);
            }}
            />
         ))
       }
    </div>
  );
};
export default Specials; 
