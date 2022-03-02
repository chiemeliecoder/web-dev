const PostItem =(posts) => {
  return (`
    <div class="mt-2 wd-flex">
      <div>
       <img class="wd-rounded-corners-circle" src="${posts.image}"
       width="48px"
       height="48px"/>
       </div>
       <div class="ps-3">
        <div class="">
          <strong class="wd-font-color wd-font-size3">${posts.userName}</strong><span class="wd-font-color wd-side2"><i class="fa-solid fa-certificate"></i></span><span class="wd-selector wd-side">${posts.topic} ${posts.time}</span>
          <span class="wd-selector wd-space"><i class="fa-solid fa-ellipsis"></i></span>
          <div class="wd-width-text wd-bottom wd-font-color ">
            ${posts.title}
          </div>
          </div>
          <div class="wd-rounded-corners-all-around wd-hr2">
            <img class="wd-rounded-corners-all-around" src="${posts.image2}" width="100%"/>
            ${posts.moretitle != "" ? `<div class="wd-pads-12px pt-3"><p><strong class="wd-font-color wd-padding2">${posts.moretitle}</strong></p><div class=" wd-selector wd-bottom wd-padding2">${posts.moretopics}</div> </div>` : ""}
          </div>
           <div class="wd-social-icon-wrapper wd-flex p-2">
                <a  href="#" class="wd-color-red-selected">
                  <i class="fa-solid fa-heart"></i>
                  <span>${posts.likes}</span>
                </a>
        
                <a href="${posts.url}">
                  <i class="fa-solid fa-comment"></i>
                  <span>${posts.comments}</span>
                </a>
        
                <a href="${posts.url}">
                  <i class="fa-solid fa-retweet"></i>
                  <span>${posts.retweet}</span>
                </a>
        
                <a href="${posts.url}">
                  <i class="fa-solid fa-arrow-up-from-bracket"></i>
                </a>
           </div>
        </div>
    </div>

  `);
}

export default PostItem;