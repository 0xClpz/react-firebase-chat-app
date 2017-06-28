import React from "react";
import PropTypes from "prop-types";

export const UserProfile = ({profile}) =>
  <div className="user-profile">
    <div className="profile-picture">
      <img
        src={profile.photoURL}
        alt="User profile"/>
    </div>
    <p>{profile.displayName}</p>
  </div>;

UserProfile.propTypes = {
  profile: PropTypes.shape({
    displayName: PropTypes.string,
    photoURL: PropTypes.picture,
  }).isRequired,
};
