import {useDispatch} from "react-redux";
import React from "react";

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
            <span>{tuits.stats.comments}</span>
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
        <div>
          <a href="#">
            <i className="fa-solid fa-retweet"></i>
            <span>{tuits.stats.retuits}</span>
          </a>
        </div>
        <div className="wd-move-lefts3">
          <a href="#">
            <i className="fa-solid fa-arrow-up-from-bracket"></i>
          </a>
        </div>
      </div>
);
}
export default TuitStats;