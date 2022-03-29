import profile from "../Data/profile.json";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useState} from "react";


const EditProfile = () =>{
  let[firstName, setFirstName] = useState({newFirstName: profile.firstName})
  const profile = useSelector(state=> state.profile);
  const dispatch = useDispatch();
  const firstNameChangeHandler = (event) =>{
    const firstName = event.target.value;
    const newFirstName = { newFirstName: firstName};
    setFirstName(newFirstName);
  }

  const saveClickHandler = () =>{
    const newProfile ={
      ...profile,
    }
    dispatch({type: 'save', firstName})
  }

  return(
      <div className="row">
        <div className="col-1">
          <Link to="/tuiter/profile"><i className="far fa-arrow-alt-circle-left"></i></Link>
        </div>
        <div>
          <img src={profile.bannerPicture}
        </div>
      </div>
  )
}