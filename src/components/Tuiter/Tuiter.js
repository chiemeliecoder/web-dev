import React from "react";
import PostSummaryItem from"./PostSummaryList/PostSummaryItem";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList/index";


const Tuiter = () =>{
  return(
      <>
        <NavigationSidebar active= "home"/>
        <WhoToFollowList/>
        <PostSummaryItem post={{
          "topic": "Web Development",
          "userName": "",
          "title": "jQuery",
          "time": "last week",
          "image": "https://w7.pngwing.com/pngs/186/205/png-transparent-react-native-react-logos-brands-icon.png",
          "tweets": "122K"
        }}/>
      </>
  )
};

export default Tuiter;