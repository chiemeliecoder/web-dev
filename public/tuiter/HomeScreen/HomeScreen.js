import NavigationSidebar from "../ NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList";
import PostList from "../PostList";

(function ($) {
  $('#wd-home').append(`
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2 mt-2">
            ${NavigationSidebar()}
        </div>
        <div class="col-6 mt-2">
         ${PostList()}
        </div>
        <div class="col-4 d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 mt-2">
            <ul class="list-group">
              ${PostSummaryList()}
            </ul>
        </div>
        </div>
    `);
})($);