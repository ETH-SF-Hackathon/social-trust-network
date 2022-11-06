import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { DAppProvider, useEthers, Config, Goerli, Mainnet } from "@usedapp/core";
import { getDefaultProvider } from "ethers";
import { ContractsAppContext, EthersAppContext } from "eth-hooks";

const themes = {
  dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/light-theme.css`,
};

const prevTheme = window.localStorage.getItem("theme");

const subgraphUri = "http://localhost:8000/subgraphs/name/scaffold-eth/your-contract";

const client = new ApolloClient({
  uri: subgraphUri,
  cache: new InMemoryCache(),
});

const config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider("mainnet"),
    [Goerli.chainId]: getDefaultProvider("goerli"),
  },
};
ReactDOM.render(
  <DAppProvider config={config}>
    <ApolloProvider client={client}>
      <ThemeSwitcherProvider themeMap={themes} defaultTheme={prevTheme || "light"}>
        <BrowserRouter>
          <App subgraphUri={subgraphUri} />
        </BrowserRouter>
      </ThemeSwitcherProvider>
    </ApolloProvider>
  </DAppProvider>,
  document.getElementById("root"),
);
