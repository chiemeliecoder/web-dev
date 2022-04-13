import {useDispatch} from "react-redux";
import React from "react";
import {updateTuit} from "../../actions/TuitsActions";

const TuitStats = ({tuits}) => {
  const dispatch = useDispatch();
  const likeTuit = () => {
    dispatch({type: 'like-tuit', tuits});
  };
  return (
      <div className="wd-social-icon-wrapper wd-flex p-2">
        <div className="wd-move-lefts">
          <a href="#">
            <i className="fa-solid fa-comment"/>
          </a>
        </div>
        <div className="wd-move-lefts2">
  <div onClick={likeTuit}>
    {
      tuits.liked &&
      <i className="fas fa-heart me-1"
    style={{color: 'red'}}/>
    }
    {
      !tuits.liked &&
      <i className="far fa-heart me-1"/>
    }
    {tuits.stats && tuits.stats.likes}
    </div>
        </div>
        <div className="wd-move-lefts6">
          <a href="#">
            <i className="fa-solid fa-retweet"></i>
          </a>
        </div>
        <div className="wd-move-lefts3">
          <a href="#">
            <i className="fa-solid fa-arrow-up-from-bracket"></i>
          </a>
        </div>
        <div className="wd-move-lefts4">
          Likes: {tuits.likes}
          <i onClick={() => updateTuit(dispatch, {...tuits, likes: tuits.likes + 1})} className="far fa-thumbs-up ms-2"/>
        </div>

        <div className="wd-move-lefts5">
          Dislikes: {tuits.dislikes}
          <i onClick={() => updateTuit(dispatch, {...tuits, dislikes: tuits.dislikes + 1})} className="far fa-thumbs-down ms-2"/>
        </div>
      </div>
);
}
export default TuitStats;