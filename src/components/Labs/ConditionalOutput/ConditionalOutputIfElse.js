import React from "react";

const ConditionalOutputIfElse = () =>{
  const loggedIn = true;
  if(loggedIn){
    return(<h2>Welcome if Else</h2>);
  } else{
    return(<h2>Please login if Else</h2>);
  }

};

export default ConditionalOutputIfElse;