import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {useNavigate} from "react-router-dom";



const EditProfile = ({profile = {"firstName": "Chiemelie",
                                      "lastName": "Ezeokeke",
                                      "fullName": "Chiemelie Ezeokeke",
                                      "handle": "cmelie",
                                      "tweet": "106 Tweets",
                                      "profilePicture": "https://images.saymedia-content.com/.image/t_share/MTc5NjQ1ODEzMTgwNDA5ODE2/the-tragedy-of-eren-yeager-how-the-character-changes-throughout-attack-on-titan.png",
                                      "bannerPicture": "https://www.simplilearn.com/ice9/free_resources_article_thumb/Best-Programming-Languages-to-Start-Learning-Today.jpg",
                                      "bio": "Faculty, Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements",
                                      "website": "youtube.com/webdevtv",
                                      "location": "Boston, MA",
                                      "dob": "7/7/1968",
                                      "dateJoined": "4/2009",
                                      "followingCount": "312",
                                      "followersCount": "180"}}) => {
  const dispatch = useDispatch();
  const profiles = useSelector(state => state.profile);


  let [fullName, setFullName] = useState(profiles[0].fullName)
  let [bio, setBio] = useState(profiles[0].bio)
  let [location, setLocation] = useState(profiles[0].location)
  let [website, setwebsite] = useState(profiles[0].website)
  let [dob, setDob] = useState(profiles[0].dob)
  let navigate = useNavigate()

  const saveHandler = () => {
    const newProfile = [{fullName, bio, location, website, dob}];
    dispatch({profile: newProfile, type: 'save'});
    navigate("/tuiter/profile")
  }

  const closeProfile = () => {
    navigate("/tuiter/profile")
  }

  return (
      <>
        <div className="mt-2 row">
          <div className="col-1">
            {/*<i onClick={() => deleteProfile(profile)}*/}
            <i onClick={closeProfile}
    className="fas fa-remove fa-2x fa-pull-right"/>
          </div>

          <div className="col-10">
            <h5 className="mt-1 ms-3 wd-bolded-font">Edit Profile</h5>
          </div>
          <div className="col-1">
            <button onClick={saveHandler}
                    className="float-end btn btn-primary rounded-pill float-end wd-rounded-corners  wd-bolded-font ed-font-black">
              Save
            </button>
          </div>

        </div>


        <div className="pt-2">
          <img width="100%" height="180" src={profiles[0].bannerPicture}/>
        </div>

        <img
            className="wd-image-border wd-relative-position-profile wd-rounded-corners"
            height="100" width="100" src={profiles[0].profilePicture}/>

        <div className="wd-content-goes-up">
          <text>Name</text>
          <textarea className="wd-width bg-transparent wd-selector wd-font-white"
                    value={fullName} onChange={(event) =>
              setFullName(event.target.value)}>
                </textarea>
          <br/>
          <text>Bio</text>
          <textarea className="wd-width bg-transparent wd-selector wd-font-white"
                    value={bio} onChange={(event) =>
              setBio(event.target.value)}>
                </textarea>
          <br/>
          <text>Location</text>
          <textarea className="wd-width bg-transparent wd-selector wd-font-white"
                    value={location} onChange={(event) =>
              setLocation(event.target.value)}>
                </textarea>
          <br/>
          <text>Website</text>
          <textarea className="wd-width bg-transparent wd-selector wd-font-white"
                    value={website} onChange={(event) =>
              setwebsite(event.target.value)}>
                </textarea>
          <br/>
          <text>Date of Birth</text>
          <textarea className="wd-width bg-transparent wd-selector wd-font-white"
                    value={dob} onChange={(event) =>
              setDob(event.target.value)}>
                </textarea>

        </div>

      </>

  );
};

export default EditProfile;