import React from "react";
import TuitListItem from "./TuitListItem";
import {useSelector} from "react-redux";

const TuitList = () => {
  const tuits = useSelector(
      state => state.tuits);

  return(

      <ul>
        {
          tuits.map && tuits.map(tuit => <TuitListItem key={tuits._id} tuits={tuit}/>)
        }
      </ul>
);

}

export default TuitList;
