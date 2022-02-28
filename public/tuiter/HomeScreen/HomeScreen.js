import NavigationSidebar from "../ NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList";
import PostList from "../PostList";

(function ($) {
  $('#wd-home').append(`
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar()}
        </div>
        <div class="col-7">
         ${PostList()}
        </div>
        <div class="col-3 d-sm-none d-md-none d-lg-block col-lg-3 col-xl-3">
            ${PostSummaryList()}
        </div>
        </div>
    `);
})($);