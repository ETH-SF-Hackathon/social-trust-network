import { Button, Typography, Image } from "antd";
import React from "react";
import { useThemeSwitcher } from "react-css-theme-switcher";

import Address from "./Address";
import Balance from "./Balance";
import Wallet from "./Wallet";
import logo from "../assets/wrappy.png";

export default function Account({
  address,
  userSigner,
  localProvider,
  mainnetProvider,
  price,
  minimized,
  web3Modal,
  loadWeb3Modal,
  logoutOfWeb3Modal,
  blockExplorer,
  isContract,
}) {
  const { currentTheme } = useThemeSwitcher();

  let accountButtonInfo;
  if (web3Modal?.cachedProvider) {
    accountButtonInfo = { name: "Logout", action: logoutOfWeb3Modal };
  } else {
    accountButtonInfo = { name: "Connect", action: loadWeb3Modal };
  }

  const display = !minimized && (
    <span>
      {address && (
        <Address address={address} ensProvider={mainnetProvider} blockExplorer={blockExplorer} fontSize={20} />
      )}
      <Balance address={address} provider={localProvider} price={price} size={20} />
      {!isContract && (
        <Wallet
          address={address}
          provider={localProvider}
          signer={userSigner}
          ensProvider={mainnetProvider}
          price={price}
          color={currentTheme === "light" ? "#1890ff" : "#2caad9"}
          size={22}
          padding={"0px"}
        />
      )}
    </span>
  );

  return (
    <div
      style={{ width: "100%", display: "flex", justifyContent: "space-between", marginTop: "20px", padding: "0 40px" }}
    >
      <div>
        <img src={logo} style={{ width: "132px", height: "24px" }}></img>
      </div>
      <div style={{ display: "flex" }}>
        {web3Modal && (
          <>
            <Typography style={{ color: "white", fontSize: "20px", fontWeight: "bold", marginLeft: "30px" }}>
              About
            </Typography>
            <Typography style={{ color: "white", fontSize: "20px", fontWeight: "bold", marginLeft: "30px" }}>
              Team
            </Typography>
            <Button
              style={{ marginLeft: 8, fontWeight: "bold", marginLeft: "30px" }}
              shape="round"
              onClick={accountButtonInfo.action}
            >
              {accountButtonInfo.name}
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
