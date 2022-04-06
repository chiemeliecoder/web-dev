
const WhoToFollowListItem = (who) => {
  return(`
        
                 <ul class="list-group">
                                <!-- continue here -->
                      <li class="list-group-item "><strong>Who to follow</strong></li>
                            <li class="list-group-item wd-float-inside">
                              <div class="m-0 p-0"><img class="rounded-circle" src="https://www.coveros.com/wp-content/uploads/2014/03/java-logo.jpg"
                                   width="60px" height="60px" /></div>
                              <div class="m-auto p-auto wd-font-size2"><strong>Java Program</strong><i class="fa fa-check"></i></br>@java</div>
                              <div class="m-0 p-0"><span><button class="btn btn-primary rounded-pill">Follow</button></span></div>
                            </li>
                            <li class="list-group-item d-flex wd-float-inside">
                              <img class="rounded-circle " src="https://images.squarespace-cdn.com/content/v1/5ac26ffc372b968231d616c2/1607139089559-XPSM9Z0LEATPE1KMDL6P/Relativity_Black.jpeg?format=2500w"
                                   width="60px" height="60px" /><div class="wd-font-size2"><strong>Relativity Space</strong><i class="fa fa-check"></i></br>@Relativityspace</div>
                              <span><button class="btn btn-primary rounded-pill ">Follow</button></span></li>
                            <li class="list-group-item d-flex wd-float-inside">
                              <img class="rounded-circle" src="https://cdn.dribbble.com/users/4032404/screenshots/10829807/virgin_galactic_concept_2_4x.png"
                                   width="60px" height="60px" /><div class="wd-font-size2"><strong>Virgin Galactic</strong><i class="fa fa-check"></i></br>@VirginGalactic</div>
                              <span><button class="btn btn-primary rounded-pill">Follow</button></span></li>
                            <li class="list-group-item d-flex wd-float-inside">
                              <img class="rounded-circle" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/NASA_Wormball_logo.svg/768px-NASA_Wormball_logo.svg.png?20191111033308"
                                   width="60px" height="60px"/><diV class="wd-font-size2"><strong>NASA Aeronaut</strong><i class="fa fa-check"></i></br> @NASA</div>
                              <span><button class="btn btn-primary rounded-pill">Follow</button></span></li>
                            <li class="list-group-item d-flex wd-float-inside">
                              <img class="rounded-circle" src="https://www.carlogos.org/car-logos/tesla-logo-2200x2800.png"
                                   width="60px" height="60px" /><div class="wd-font-size2"><strong>Tesla Innovation</strong><i class="fa fa-check"></i></br> @Tesla</div>
                              <span><button class="btn btn-primary rounded-pill">Follow</button></span></li>
                 </ul>
   `);
}
export default WhoToFollowListItem;
