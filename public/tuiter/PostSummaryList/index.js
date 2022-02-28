import exploreItems from "./post.js"
import PostSummaryItem from "./PostSummaryItem.js";

const  PostSummaryList = () => {

  return(`
           
         <div>
          ${exploreItems.map(post =>{
            return(PostSummaryItem(post));
  }).join('')
  
  }
          </div>
  
  
  `);
}

export default  PostSummaryList;