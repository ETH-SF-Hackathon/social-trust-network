import { useContractReader } from "eth-hooks";
import { ethers } from "ethers";
import React from "react";
import { useEthers, Config, Mainnet, Goerli } from "@usedapp/core";
import abi from "../abi.json";
import { Link } from "react-router-dom";

function Home({ yourLocalBalance, readContracts, loadWeb3Modal }) {
  const { activateBrowserWallet, account, library } = useEthers();

  // Goerli Contract
  const contractAddress = "0xb6d8de11789513e130aca839866a6aaf94a9db93";

  const mint = async () => {
    const exampleWallet = "0xffb52611d0e27D25b93a31814740210A974071fe";

    const provider = await new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner();

    const contract = await new ethers.Contract(contractAddress, abi, signer);
    const tx = await contract.mint(exampleWallet);
  };

  return (
    <div
      style={{
        padding: "120px 78px",
        // minHeight: "100%",
        // minWidth: "100%",
        // background: "url('assets/wrappy-background.png') no- repeat center center fixed",
        // backgroundSize: "100",
        // backgroundRepeat: "no-repeat",
        // backgroundPosition: "center center",
        // backgroundAttachment: "fixed",
      }}
    >
      <p
        style={{
          maxWidth: "800px",
          textAlign: "left",
          marginBottom: 0,
          fontSize: "72px",
          fontWeight: "bold",
          color: "white",
          padding: "8px",
          // color: "linear-gradient(82.38deg, #E75413 3.3%, #C624FF 50.69%, #0CB4FF 98.08%)",
          background: "linear-gradient(90deg, #4158D0, #C850C0 30%, #FFCC70)",
          background: "-webkit-linear-gradient(0deg, #4158D0, #C850C0 30%, #FFCC70)",
        }}
      >
        Treasure your friendship on-chain
      </p>
      <p
        style={{
          maxWidth: "800px",
          textAlign: "left",
          fontSize: "30px",
          color: "white",
          padding: "8px",
          marginTop: "24px",
        }}
      >
        Flourish your planet by interacting with your friends on-chain
      </p>
      <div style={{ display: "flex", justifyContent: "left" }}>
        <div
          style={{
            width: "240px",
            background: "linear-gradient(82.38deg, #E75413 3.3%, #C624FF 50.69%, #0CB4FF 98.08%)",
            padding: "4px",
            borderRadius: "34px",
          }}
        >
          <button
            style={{
              width: "100%",
              fontSize: "20px",
              fontWeight: "bold",
              padding: "8px 12px",
              backgroundColor: "white",
              borderRadius: "30px",
              border: "none",
            }}
            onClick={loadWeb3Modal}
          >
            Connect Wallet
          </button>
        </div>
        <Link to="/planet">
          <div
            style={{
              marginLeft: "20px",
              width: "240px",
              background: "linear-gradient(82.38deg, #E75413 3.3%, #C624FF 50.69%, #0CB4FF 98.08%)",
              padding: "4px",
              borderRadius: "34px",
              color: "white",
              padding: "12px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            View My Planet
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
