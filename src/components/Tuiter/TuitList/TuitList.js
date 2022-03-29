import React from "react";
import TuitListItem from "./TuitListItem";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import WhoToFollowListItem from "../WhoToFollowList/WhoToFollowListItem";

const TuitList = () => {
  const tuits = useSelector(
      state => state.tuits);
  const dispatch = useDispatch();
  const deleteTuit = (tuit) => {
    dispatch({type: 'delete-tuit', tuit})
  };

  return(

      <ul>
        {
          tuits.map && tuits.map(tuit => <TuitListItem key={tuits._id} tuits={tuit}/>)
        }
      </ul>
);

}

export default TuitList;
