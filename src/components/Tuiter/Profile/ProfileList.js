import React from "react";
import {useSelector} from "react-redux";
import ProfileReducer from "../Reducers/ProfileReducer";
import ProfileListItem from "./ProfileListItem"

const ProfileList = () => {
  const profile = useSelector(
      state => state.profile);

  return(
      <div>
        {profile && profile.map && profile.map((profile) =>
            <ProfileListItem profile={profile}/>)
        }
      </div>

  )


}

export default ProfileList;

