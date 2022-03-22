const PostItem =({     posts = {"topic": "@robert_zubrin.",
                                    "userName": "Robert Zubrin",
                                    "time": "Jul 31",
                                    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                                    "image": "https://i.pinimg.com/736x/c7/05/48/c70548b658d363aff3a246f1466a8087.jpg",
                                    "image2": "https://wegotthiscovered.com/wp-content/uploads/2022/01/Sasaki-and-Miyano-ep-1.jpg",
                                    "moretitle":"Valentines Day Sasaki And Miyano", "moretopics":"Happy Valentine's day y'all! Thought the umbrella scene from the newest episode was cute so I added a couple of things. This anime is really good 🔥",
                                    "likes":"37",
                                    "comments":"22",
                                    "retweet":"9",
                                    "url":"#"}

                        }

              ) => {
  return (
    <div className="mt-2 wd-flex">
      <div>
       <img className="wd-rounded-corners-circle" src={posts.image} width="48px" height="48px"/>
       </div>
       <div className="ps-3">
        <div className="">
          <strong className="wd-font-color wd-font-size3">{posts.userName}</strong><span className="wd-font-color wd-side2"><i className="fa-solid fa-certificate"></i></span><span className="wd-selector wd-side">{posts.topic} {posts.time}</span>
          <span className="wd-selector wd-space"><i className="fa-solid fa-ellipsis"></i></span>
          <div className="wd-width-text wd-bottom wd-font-color ">
            {posts.title}
          </div>
          </div>
          <div className="wd-rounded-corners-all-around wd-hr2">
            <img className="wd-rounded-corners-all-around" src={posts.image2} width="100%"/>
            {posts.moretitle != "" ? <div className="wd-pads-12px pt-3"><p><strong className="wd-font-color wd-padding2">{posts.moretitle}</strong></p><div className=" wd-selector wd-bottom wd-padding2">{posts.moretopics}</div> </div> : ""}
          </div>
           <div className="wd-social-icon-wrapper wd-flex p-2">
                <a  href="#" className="wd-color-red-selected">
                  <i className="fa-solid fa-heart"></i>
                  <span>{posts.likes}</span>
                </a>
        
                <a href="{posts.url}">
                  <i className="fa-solid fa-comment"></i>
                  <span>{posts.comments}</span>
                </a>
        
                <a href="{posts.url}">
                  <i className="fa-solid fa-retweet"></i>
                  <span>{posts.retweet}</span>
                </a>
        
                <a href="{posts.url}">
                  <i className="fa-solid fa-arrow-up-from-bracket"></i>
                </a>
           </div>
        </div>
    </div>

  );
}

export default PostItem;