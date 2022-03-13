const PostSummaryItem =({
                            post = {
                                "topic": "Web Development",
                                "userName": "ReactJS",
                                "time": "2h",
                                "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                                "image": "https://w7.pngwing.com/pngs/186/205/png-transparent-react-native-react-logos-brands-icon.png"
                            }
                        }) =>{

  return(
        <div className="wd-post-summary-item-wrapper">
            <li className="list-group-item">
                 <div className="mt-0">
                        <img className = "d-flex wd-float-right wd-rounded-corners-all-around" src={post.image} width="100px" height="100px"/>
                        {post.topic != "" ? <span className="wd-selector fs-6">{post.topic}</span> : ""}<br/>
                   <span>{post.userName != "" ? <strong>{post.userName}</strong>  : "" }<span className="wd-font-color wd-side2"><i className="fa-solid fa-certificate"></i></span>
                        <span className="wd-selector wd-font-size2 wd-side2">-{post.time}</span></span>
                        <p><strong>{post.title} </strong></p>
                            <p><span className="wd-selector wd-font-size2">{post.tweets}</span></p>
                 </div>
            </li>
        </div>

  );
}

export default PostSummaryItem
