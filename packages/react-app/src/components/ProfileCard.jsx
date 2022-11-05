import React from "react";

function ProfileCard({ id, imageUrl, handle, address, name }) {
  return (
    <div className="profile-card">
      <div className="mint-banner">MINT</div>
      <div className="card-title">{name}</div>
      <img className="profile-img" src={imageUrl} alt="" width="50%" height=""></img>
      <div className="card-text">{handle}</div>
      <div className="card-text">
        {address.substr(0, 3)}...{address.substr(address.length - 3)}
      </div>
    </div>
  );
}

export default ProfileCard;