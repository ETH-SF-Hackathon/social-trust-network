import { useCallback, useEffect, useState } from "react";
import { getLensProfiles } from "../api";
import CardsGrid from "./CardsGrid";

/**
 * web3 props can be passed from '../App.jsx' into your local view component for use
 * @param {*} yourLocalBalance balance on current network
 * @param {*} readContracts contracts from current chain already pre-loaded using ethers contract module. More here https://docs.ethers.io/v5/api/contract/contract/
 * @returns react component
 **/
function CardsContainer() {
  const [profiles, setProfiles] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getProfiles = useCallback(async () => {
    const profiles = await getLensProfiles();
    console.log("profiles", profiles);
    setProfiles(profiles);
  });
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);
  return (
    <div className="cards-container cards-page-background">
      <div className="profile-grid">
        <CardsGrid profiles={profiles} />
      </div>
    </div>
  );
}

export default CardsContainer;
