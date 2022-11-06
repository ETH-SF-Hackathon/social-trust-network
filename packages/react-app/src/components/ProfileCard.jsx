import React from "react";
import { useEthers } from "@usedapp/core";
import { getContract } from "../ethers";

function ProfileCard({ id, imageUrl, handle, address, name, web3Modal, userSigner, myAddress }) {
  const { activateBrowserWallet, account, library } = useEthers();

  const mintToken = async () => {
    getContract(library, myAddress, address, 1)
  }
  return (
    <div className="profile-card" onClick={mintToken}>
      {/* <div className="mint-banner">MINT</div>
      <div className="card-title">{name}</div> */}
      <img className="profile-img" src={imageUrl} alt="" width="50%" height=""></img>
      <div className="card-text">
        <span>{handle}</span>
      </div>
      {/* <div className="card-text">
        {address.substr(0, 3)}...{address.substr(address.length - 3)}
      </div> */}
    </div>
  );
}

export default ProfileCard;
