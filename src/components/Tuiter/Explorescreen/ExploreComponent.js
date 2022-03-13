import React from "react";
import PostSummaryList from "../PostSummaryList/index.js";


const ExploreComponent = () => {
  return(

      <>
            <div className="row">
                {/*search field and cog*/}
                       <div className="col-11 form-group has-search">
                          <span className="fa fa-search form-control-feedback"></span>
                          <input type="text" className="form-control rounded-pill " placeholder="Search Tuiter..."/>
                      </div>
                      <div className="col-1"><i className="fa fa-cog fa-2x wd-color-cog wd-side-cog "></i></div>
           </div>
          <div className="row">
           <ul className="nav mb-2 nav-tabs">
               {/* tabs */}
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">For You</a>
              </li>
              <li className="nav-item">
                <a href=""  className="nav-link" href="#">Trending</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link" >Covid-19</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">News</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">Sport</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">Entertainment</a>
              </li>
           </ul>
          </div>
           {/*image with overlaid text*/}
           <div>
           <img className="img-fluid rounded mx-auto" src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" width="100%" />
           <strong className="fs-3 wd-bottom-lefts wd-font-color">SpaceX's Starship</strong>
           </div>
       
           <PostSummaryList/>
      </>

    );
}
export default ExploreComponent;
