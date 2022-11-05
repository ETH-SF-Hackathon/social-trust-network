import React from "react";

function ProfileCard({imageUrl}) {
  return <div className="profile-card">
      <div className ="profile-img"></div>
     <img src={imageUrl} alt="" width="50%" height=""/>
  </div>
}

export default ProfileCard;
