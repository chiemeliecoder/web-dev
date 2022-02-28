alert('Hello World!');

const NavigationSidebar = (active) => {
  return(`
            <div class="list-group">
                <a class="list-group-item" href="/"><i class="fab fa-twitter"></i></a>
            <!-- continue the rest of the list -->
                <a href="home.html" class="list-group-item list-group-item-action"><i class="fa fa-house-user"></i><span class="d-none d-sm d-xl-inline-block">Home</span></a>
                <a href="#" class="list-group-item list-group-item-action active"><i class="fa fa-hashtag"></i><span class="d-none d-sm d-xl-inline-block"> Explore</span></a>
                <a href="notification.html" class="list-group-item list-group-item-action"><i class="fa fa-bell"></i><span class="d-none d-sm  d-xl-inline-block"> Notification</span></a>
                <a href="message.html" class="list-group-item list-group-item-action"><i class="fa fa-envelope"></i><span class="d-none d-sm d-xl-inline-block"> Message</span></a>
                <a href="bookmarks.html" class="list-group-item list-group-item-action"><i class="fa fa-bookmark"></i><span class="d-none d-sm d-xl-inline-block"> Bookmarks</span></a>
                <a href="lists.html" class="list-group-item list-group-item-action"><i class="fa fa-list"></i><span class="d-none d-sm  d-xl-inline-block"> List</span></a>
                <a href="profile.html"class="list-group-item list-group-item-action"><i class="fa fa-user"></i><span class="d-none d-sm  d-xl-inline-block"> Profile</span></a>
                <a href="#"class="list-group-item list-group-item-action"><i class="fa fa-caret-down"></i><span class="d-none d-sm d-xl-inline-block"> More</span></a>
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;