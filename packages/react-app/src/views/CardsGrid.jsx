import { ProfileCard } from "../components";

/**
 * web3 props can be passed from '../App.jsx' into your local view component for use
 * @param {*} yourLocalBalance balance on current network
 * @param {*} readContracts contracts from current chain already pre-loaded using ethers contract module. More here https://docs.ethers.io/v5/api/contract/contract/
 * @returns react component
 **/
function CardsGrid({ profiles }) {
  const renderProfiles = () => {
    return profiles.map(({ id, name, handle, ownedBy, picture }) => {
      return (
        <ProfileCard
          key={id}
          name={name}
          handle={handle}
          address={ownedBy}
          imageUrl={
            picture
              ? picture.original.url.includes("ipfs://")
                ? picture.original.url.replace("ipfs://", "https://ipfs.io/ipfs/")
                : picture.original.url
              : "https://statics-mumbai-lens-staging.s3.eu-west-1.amazonaws.com/profile/QmVeEwimhwaebeHFDTVY3XNjFuaNUWuhv1ksNefnzeTKXH"
          }
        />
      );
    });
  };
  return (
    <div className="profile-grid">
      <div className="cards-grid">{renderProfiles()}</div>
    </div>
  );
}

export default CardsGrid;
