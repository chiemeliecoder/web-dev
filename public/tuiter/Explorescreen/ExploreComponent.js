import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return(`
       <div class="col-7">
            <div class="row">
                       <!-- search field and cog -->
                       <div class="col-11 form-group has-search">
                          <span class="fa fa-search form-control-feedback"></span>
                          <input type="text" class="form-control rounded-pill " placeholder="Search Tuiter..."/>
                      </div>
                      <div class="col-1"><i class="fa fa-cog fa-2x wd-color-cog wd-side-cog "></i></div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                      <!-- tabs -->
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">For You</a>
              </li>
              <li class="nav-item">
                <a href="" href="trending.html" class="nav-link" href="#">Trending</a>
              </li>
              <li class="nav-item">
                <a href="" class="nav-link" href="#">Covid-19</a>
              </li>
              <li class="nav-item">
                <a href="" class="nav-link">News</a>
              </li>
              <li class="nav-item">
                <a href="" class="nav-link">Sport</a>
              </li>
              <li class="nav-item">
                <a href="" class="nav-link">Entertainment</a>
              </li>
           </ul>
           <!-- image with overlaid text -->
           <div>
           <img class="img-fluid rounded mx-auto" src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" width="100%" />
           <strong class="fs-3 wd-bottom-lefts wd-font-color">SpaceX's Starship</strong>
           </div>
       
           ${PostSummaryList()}
       </div>
    `);
}
export default ExploreComponent;
