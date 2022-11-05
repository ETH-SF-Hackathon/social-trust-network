import { ProfileCard } from "../components";


/**
 * web3 props can be passed from '../App.jsx' into your local view component for use
 * @param {*} yourLocalBalance balance on current network
 * @param {*} readContracts contracts from current chain already pre-loaded using ethers contract module. More here https://docs.ethers.io/v5/api/contract/contract/
 * @returns react component
 **/
function CardsGrid() {
  return<div className="cards-grid">
    <ProfileCard 
      imageUrl= 'https://lens.infura-ipfs.io/ipfs/Qma8mXoeorvPqodDazf7xqARoFD394s1njkze7q1X4CK8U'
    />
    <ProfileCard 
    imageUrl= 'https://lens.infura-ipfs.io/ipfs/Qma8mXoeorvPqodDazf7xqARoFD394s1njkze7q1X4CK8U'
    />
    <ProfileCard 
    imageUrl= 'https://lens.infura-ipfs.io/ipfs/Qma8mXoeorvPqodDazf7xqARoFD394s1njkze7q1X4CK8U'
    />
    <ProfileCard 
    imageUrl= 'https://lens.infura-ipfs.io/ipfs/Qma8mXoeorvPqodDazf7xqARoFD394s1njkze7q1X4CK8U'
    />
    <ProfileCard 
    imageUrl= 'https://lens.infura-ipfs.io/ipfs/Qma8mXoeorvPqodDazf7xqARoFD394s1njkze7q1X4CK8U'
    />
    <ProfileCard 
    imageUrl= 'https://lens.infura-ipfs.io/ipfs/Qma8mXoeorvPqodDazf7xqARoFD394s1njkze7q1X4CK8U'
    />
    <ProfileCard 
    imageUrl= 'https://lens.infura-ipfs.io/ipfs/Qma8mXoeorvPqodDazf7xqARoFD394s1njkze7q1X4CK8U'
    />
    <ProfileCard 
    imageUrl= 'https://lens.infura-ipfs.io/ipfs/Qma8mXoeorvPqodDazf7xqARoFD394s1njkze7q1X4CK8U'
    />
    <ProfileCard 
    imageUrl= 'https://lens.infura-ipfs.io/ipfs/Qma8mXoeorvPqodDazf7xqARoFD394s1njkze7q1X4CK8U'
    />
    <ProfileCard 
    imageUrl= 'https://lens.infura-ipfs.io/ipfs/Qma8mXoeorvPqodDazf7xqARoFD394s1njkze7q1X4CK8U'
    />
    <ProfileCard 
    imageUrl= 'https://lens.infura-ipfs.io/ipfs/Qma8mXoeorvPqodDazf7xqARoFD394s1njkze7q1X4CK8U'
    />
  </div>
}

export default CardsGrid;
