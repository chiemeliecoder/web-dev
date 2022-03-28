import React from "react";
import TuitListItem from "./TuitListItem";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import WhoToFollowListItem from "../Tuiter/WhoToFollowList/WhoToFollowListItem";

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
          tuits.map && tuits.map(tuit => <TuitListItem key={tuit._id} tuit={tuit}/>)
        }
      </ul>
);


  // return (
  //     // <ul className="ttr-tuits list-group">
  //     //   {
  //     //     tuits.map && tuits.map(tuit =>
  //     //         <TuitListItem key={tuit._id}
  //     //                       tuit={tuit}/>)
  //     //   }
  //     // </ul>
  //
  // );
}

export default TuitList;
