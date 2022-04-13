import postItems from "./posts.js"
import PostItem from "./PostItem.js";

const PostList= () => {

  return(`
           
         <div>
          ${postItems.map(posts =>{
    return(PostItem(posts));
  }).join('')

  }
          </div>
  
  
  `);
}

export default PostList;