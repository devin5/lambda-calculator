import React, {useState} from "react";

//import any components needed
import OperatorButton from "./OperatorButton";
//Import your array data to from the provided data file
import {operators} from "../../../data";
const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const[operatorState, setOperatorState] = useState(operators); 

  const onOperatorButtonClick = (operator) => {
    console.log("Operator.js: I am in onOperatorButtonClick(). operator: " + operator); 
    if(operator === "="){
      props.evaluateExpression(); 
    }else{
      props.updateDisplayNum(operator); 
    }
  };

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {
       operatorState.map((operator, index) => (
         <OperatorButton index={index} operator={operator} operatorButtonClick={() => {
           onOperatorButtonClick(operator.value); 
         }}
         />
       ))
        }
    </div>
    
  );
};

export default Operators; 