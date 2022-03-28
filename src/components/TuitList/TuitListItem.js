import {useDispatch} from "react-redux";
import TuitStats from "./TuitStats";
import React from "react";

const TuitListItem = (
                          {
                            tuits = {"_id": "123", "topic": "Web Development", "postedBy": {
                                              "username": "SpaceX"
                                            },
                                            "liked": true,
                                            "verified": false,
                                            "handle": "ReactJS",
                                            "time": "2h",
                                            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                                            "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                                            "attachments": {
                                              "image": "../images/starship.png"
                                            },
                                            "logo_image": "../../../images/react-blue.png",
                                            "avatar_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2Y2gmQB5zuaBd1AfN_AyEgoTgxPF65i7GwlvrbnnP_RUlubieG19WFnonCtS4ZfAox4&usqp=CAU",
                                              "stats": {
                                              "comments": "123",
                                              "retuits": "234",
                                              "likes": "345"}
                                      }

                          }) => {
  const dispatch = useDispatch();
  const deleteTuit = (tuits) =>{ dispatch({type: 'delete-tuit', tuits})
                                  };
                          return(


                                      <div className="mt-2 wd-flex">
                                        <div>
                                          <img className="wd-rounded-corners-circle" src={tuits.avatar_image} width="48px" height="48px"/>
                                        </div>

                                        <div className="ps-3">
                                          <div>
                                            <i onClick={() =>
                                                deleteTuit(tuits)}
                                               className="fas fa-remove fa-2x fa-pull-right"/>
                                          </div>
                                          <div className="">
                                            <strong className="wd-font-color wd-font-size3">{tuits.postedBy.username}</strong><span className="wd-font-color wd-side2"><i className="fa-solid fa-certificate"></i></span><span className="wd-selector wd-side">@{tuits.handle} {tuits.time}</span>
                                            <span className="wd-selector wd-space"><i className="fa-solid fa-ellipsis"></i></span>
                                            <div className="wd-width-text wd-bottom wd-font-color ">
                                              {tuits.tuit}
                                            </div>
                                          </div>
                                          <div className="wd-rounded-corners-all-around wd-hr2">
                                            <img className="wd-rounded-corners-all-around" src={tuits.attachments} width="100%"/>
                                          </div>
                                          <div className="wd-social-icon-wrapper wd-flex p-2">
                                            <a  href="#" className="wd-color-red-selected">
                                              <i className="fa-solid fa-heart"/>
                                              <span>{tuits.likes}</span>
                                            </a>

                                            <a href="{posts.url}">
                                              <i className="fa-solid fa-comment"/>
                                              <span>{tuits.comments}</span>
                                            </a>

                                            <a href="{posts.url}">
                                              <i className="fa-solid fa-retweet"/>
                                              <span>{tuits.retuits}</span>
                                            </a>

                                            <a href="{posts.url}">
                                              <i className="fa-solid fa-arrow-up-from-bracket"/>
                                            </a>
                                          </div>
                                        </div>
                                      </div>);

};

export default  TuitListItem;