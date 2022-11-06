import { ethers } from "ethers";
import React from "react";

import { useEthers, Config, Mainnet, Goerli } from "@usedapp/core";
import abi from "../abi.json";
import { useBalance, useUserProviderAndSigner, useContractReader } from "eth-hooks";
import "../planet.css";
import firstPlanet from "../assets/planets/0.png";
import secondPlanet from "../assets/planets/1.png";
import thirdPlanet from "../assets/planets/2.png";
import edit from "../assets/icon/edit.png";
import friends from "../assets/icon/friends.png";
import share from "../assets/icon/share.png";
import { Web3ModalSetup } from "../helpers";
import { BigNumber } from "ethers";

function Planet({ loadWeb3Modal }) {
  const { activateBrowserWallet, account, library } = useEthers();
  const [provider, setProvider] = React.useState();
  const [balance, getBalance] = React.useState(0);
  const web3Modal = Web3ModalSetup();

  // Goerli Contract
  const contractAddress = "0x104EEABb4261f164149781A6CEb3cE56Bda44f8f";
  const wrappyWallet = "0xffb52611d0e27D25b93a31814740210A974071fe";

  const connect = async () => {
    activateBrowserWallet();
  };

  const getBalanceOfSBT = async () => {
    const provider = await new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = await new ethers.Contract(contractAddress, abi, signer);
    const balance = await contract.balanceOf(wrappyWallet, 0); //TODO: get signerAddress
    const num = BigNumber.from(balance).toNumber();
    getBalance(num);
  };

  return (
    <div
      style={{
        padding: "0px 80px",
        minHeight: "100%",
      }}
      className="bg"
    >
      {balance < 3 ? (
        <img src={firstPlanet} style={{ height: "600px", width: "600px" }} />
      ) : balance < 10 ? (
        <img src={secondPlanet} style={{ height: "600px", width: "600px" }} />
      ) : balance > 10 ? (
        <img src={thirdPlanet} style={{ height: "600px", width: "600px" }} />
      ) : null}

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <div
            style={{ backgroundColor: "#767474", width: "68px", height: "68px", borderRadius: "28px", padding: "8px" }}
          >
            <img src={share} />
            <p style={{ color: "white", fontWeight: "bold" }}>Share</p>
          </div>
          <div
            style={{
              marginLeft: "16px",
              backgroundColor: "#767474",
              width: "68px",
              height: "68px",
              borderRadius: "28px",
              padding: "8px",
            }}
          >
            <img src={friends} />
            <p style={{ color: "white", fontWeight: "bold" }}>Friends</p>
          </div>
          <div
            style={{
              marginLeft: "16px",
              backgroundColor: "#767474",
              width: "68px",
              height: "68px",
              borderRadius: "28px",
              padding: "8px",
            }}
          >
            <img src={edit} />
            <p style={{ color: "white", fontWeight: "bold" }}>Edit</p>
          </div>
        </div>
        <div
          style={{
            marginLeft: "16px",

            background: "rgba(255, 255, 255, 0.3)",
            width: "320px",
            height: "104px",
            borderRadius: "28px",
            padding: "8px",
            fontSize: "22px",
            color: "white",
            fontWeight: "bold",
          }}
          onClick={getBalanceOfSBT}
        >
          Check My SBT
          <br />
          Number of SBT is {balance}
        </div>
      </div>
    </div>
  );
}

export default Planet;
