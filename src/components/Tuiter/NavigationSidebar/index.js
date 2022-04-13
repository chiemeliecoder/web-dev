import React from "react";
import {Link,useLocation} from "react-router-dom";


const NavigationSidebar = () => {
  const location = useLocation().pathname.split("/")

  const newLocation = location.filter(element => element != "")

  const active = newLocation[newLocation.length-1];

  return(
      <>
            <div className="list-group">
                <Link  className="list-group-item" to="/"><i className="fab fa-twitter"></i></Link>

                <Link to="/tuiter" className={`list-group-item list-group-item-action ${active === 'tuiter' ? 'active' : ""}`}><i className="fa fa-house-user"></i><span className="d-none d-sm d-xl-inline-block">Home</span></Link>
                <Link to="/tuiter/explore" className={`list-group-item list-group-item-action ${active === 'explorer' ? 'active' : ""}`}><i className="fa fa-hashtag"></i><span className="d-none d-sm d-xl-inline-block"> Explore</span></Link>
                <Link to="notification.html" className="list-group-item list-group-item-action"><i className="fa fa-bell"></i><span className="d-none d-sm  d-xl-inline-block"> Notification</span></Link>
                <Link to="message.html" className="list-group-item list-group-item-action"><i className="fa fa-envelope"></i><span className="d-none d-sm d-xl-inline-block"> Message</span></Link>
                <Link to="bookmarks.html" className="list-group-item list-group-item-action"><i className="fa fa-bookmark"></i><span className="d-none d-sm d-xl-inline-block"> Bookmarks</span></Link>
                <Link to="lists.html" className="list-group-item list-group-item-action"><i className="fa fa-list"></i><span className="d-none d-sm  d-xl-inline-block"> List</span></Link>
                <Link to="/tuiter/profile"className={`list-group-item list-group-item-action ${active === 'profile' || active === 'editProfile'? 'active' : ''}`}><i className="fa fa-user"></i><span className="d-none d-sm  d-xl-inline-block"> Profile</span></Link>
                <Link to="#"className="list-group-item list-group-item-action"><i className="fa fa-caret-down"></i><span className="d-none d-sm d-xl-inline-block"> More</span></Link>
            </div>
            <div className="d-grid mt-2">
                <Link to="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</Link>
            </div>
      </>
    );
}
export default NavigationSidebar;