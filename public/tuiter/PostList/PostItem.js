const PostItem =(posts) =>{
  return(`
    <div>
       <img class="wd-rounded-corners-circle" src="${posts.image}"
       width="48px"
       height="48px"/>
        <div class="wd-pos-relative-nudge-bottom-left wd-font-size wd-vl wd-rounded-corners-top">
          <strong class="wd-font-color">${posts.userName}</strong><span class="wd-selector">${posts.topic} ${posts.time}</span>
          <span class="wd-selector wd-space"><i class="fa-solid fa-ellipsis"></i></span>
          <div class="wd-width-text wd-bottom wd-font-color">
            ${posts.title}
          </div>
          <img class="wd-rounded-corners-all-around wd-bottom" src="${posts.image2}" width="504px" height="264px"/>
      
          <div class="wd-pads-12px wd-width-text wd-rounded-corners-top wd-hr2">
            <p><strong class="wd-font-color wd-padding2">${posts.moretitle}</strong></p>
          <div class=" wd-selector wd-bottom wd-padding2">${posts.moretopics}</div>
            <div class="wd-flex">
              <a style="text-decoration: none" href="#">
                <i class="fa-solid fa-heart wd-color-red-selected"></i>
                <span>${posts.likes}</span>
              </a>
      
              <a style="text-decoration: none"   href="${posts.url}">
                <i class="fa-solid fa-comment"></i>
                <span>${posts.comments}</span>
              </a>
      
              <a style="text-decoration: none" href="${posts.url}">
                <i class="fa-solid fa-retweet"></i>
                <span>${posts.retweet}</span>
              </a>
      
              <a style="text-decoration: none" href="${posts.url}">
                <i class="fa-solid fa-arrow-up-from-bracket"></i>
              </a></div>
              </div>
        </div>
    </div>

  `);
}

export default PostItem;