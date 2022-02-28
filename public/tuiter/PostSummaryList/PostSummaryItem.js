const PostSummaryItem =(post) =>{

  return(`
        <div>
           <div class="mt-4 border-bottom">
                  <img class = "d-flex wd-float-right wd-rounded-corners-all-around" src="${post.image}" width="100px" height="100px">
                  <span class="wd-selector fs-6">${post.topic}</span></br>
                  <strong>${post.username}</strong> <span class="wd-selector wd-font-size2">${post.time}</span></br>
                  <strong>${post.title} </strong></br>
                  <span class="wd-selector wd-font-size2">${post.tweets}</span>
                </div>
        </div>

  `);
}

export default PostSummaryItem
