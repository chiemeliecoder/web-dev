
const WhoToFollowListItem = (
    {
      who = {"avatarIcon": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/NASA_Wormball_logo.svg/768px-NASA_Wormball_logo.svg.png?20191111033308",
                  "userName": "NASA",
                  "handle": "NASA"}
    }) => {
                  return(
                              <div>

                                     <ul  className="list-group">
                                         {/*continue here */}

                                                <li  className="list-group-item wd-float-inside">
                                                      <div  className="m-0 p-0">
                                                          <img  className="rounded-circle" src={who.avatarIcon}width="60px" height="60px" />
                                                      </div>
                                                      <div  className="m-auto p-auto wd-font-size2">
                                                          <strong>{who.userName}</strong><i  className="fa fa-check"></i><p>@{who.handle}</p>
                                                      </div>
                                                      <div  className="m-0 p-0">
                                                          <span><button  className="btn btn-primary rounded-pill">Follow</button></span>
                                                      </div>
                                                </li>
                                     </ul>
                              </div>
                   );
}
export default WhoToFollowListItem;
