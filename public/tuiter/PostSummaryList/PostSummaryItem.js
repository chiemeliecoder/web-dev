const PostSummaryItem =(post) =>{

  return(`
        <div class="wd-post-summary-item-wrapper">
            <li class="list-group-item">
                 <div class="mt-0">
                        <img class = "d-flex wd-float-right wd-rounded-corners-all-around" src="${post.image}" width="100px" height="100px">
                        ${post.topic != "" ? `<span class="wd-selector fs-6">${post.topic}</span></br>` : ""}
                        ${post.userName != "" ? `<strong>${post.userName}</strong> ` : "" }
                        <span class="wd-selector wd-font-size2 wd-side2">${post.time}</span></br>
                        <strong>${post.title} </strong></br>
                        <span class="wd-selector wd-font-size2">${post.tweets}</span>
                 </div>
            </li>
        </div>

  `);
}

export default PostSummaryItem
