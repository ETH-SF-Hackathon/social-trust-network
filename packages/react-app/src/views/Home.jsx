import { useContractReader } from "eth-hooks";
import { ethers } from "ethers";
import React from "react";
import { Link } from "react-router-dom";
import { useEthers, Config, Mainnet, Goerli } from "@usedapp/core";
import abi from "../abi.json";
/**ethers
 * web3 props can be passed from '../App.jsx' into your local view component for use
 * @param {*} yourLocalBalance balance on current network
 * @param {*} readContracts contracts from current chain already pre-loaded using ethers contract module. More here https://docs.ethers.io/v5/api/contract/contract/
 * @returns react component
 **/

function Home({ yourLocalBalance, readContracts }) {
  // you can also use hooks locally in your component of choice
  // in this case, let's keep track of 'purpose' variable from our contract
  const purpose = useContractReader(readContracts, "YourContract", "purpose");
  const { activateBrowserWallet, account, library } = useEthers();

  console.log("account :", account);
  // Goerli Contract
  const contractAddress = "0xb6d8de11789513e130aca839866a6aaf94a9db93";

  const mint = async () => {
    const exampleWallet = "0xffb52611d0e27D25b93a31814740210A974071fe";
    console.log("account in mint func:", account);

    const provider = await new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner();

    console.log("signer :", signer);

    const contract = await new ethers.Contract(contractAddress, abi, signer);
    const tx = await contract.mint(exampleWallet);
    console.log("tx :", tx);
  };

  return (
    <div>
      <div style={{ margin: 32 }}>
        <span style={{ marginRight: 8 }}>📝</span>
        This Is Your App Home. You can start editing it in{" "}
      </div>

      <button style={{ backgroundColor: "white", padding: "8px", borderRadius: "8px" }} onClick={mint}>
        mint SBT
      </button>

      <button style={{ backgroundColor: "white", padding: "8px", borderRadius: "8px" }} onClick={activateBrowserWallet}>
        Connect Wallet
      </button>
    </div>
  );
}

export default Home;
