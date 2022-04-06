import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
  const who = useSelector((state) => state.who);
  return (

      <>
        <div>
          <ul  className="list-group">
            <li className="list-group-item wd-float-inside"><strong>Who to follow</strong></li>
          </ul>
        </div>
        {
          who.map(whoItem => {
            return (
                <WhoToFollowListItem who={whoItem}/>
            )
          })
        }
      </>


      );
};
export default WhoToFollowList;
