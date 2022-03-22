import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import whoData from "./who";

const WhoToFollowList = () => {
  return (
     <>
       <div>
         <ul  className="list-group">
            <li className="list-group-item wd-float-inside"><strong>Who to follow</strong></li>
         </ul>
       </div>
       {
         whoData.map(whoItem => {
          return (
               <WhoToFollowListItem who={whoItem}/>
          )
          })
       }
     </>

      );
};
export default WhoToFollowList;
