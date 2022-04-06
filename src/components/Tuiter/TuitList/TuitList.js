import React, {useEffect, useState} from "react";
import TuitListItem from "./TuitListItem";
import {useDispatch,useSelector} from "react-redux";
import {findAllTuits, deleteTuit, createTuit, updateTuit} from "../../actions/TuitsActions.js";

const TuitList = () => {
  const tuits = useSelector(
      state => state.tuits);

  const [newTuit, setNewTuit] =
      useState({tuit: 'New tuit'});

  const dispatch = useDispatch();


  useEffect(() =>findAllTuits(dispatch), []);

  return(


      <ul>

        {
          tuits.map && tuits.map(tuit => <TuitListItem key={tuits._id} tuits={tuit}/>)
        }
      </ul>
);

}

export default TuitList;
