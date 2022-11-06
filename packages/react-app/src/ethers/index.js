import {ethers} from 'ethers'
import { abi } from "./abi";
const contractAddress = "0xb6D8de11789513E130aCa839866a6Aaf94a9dB93";

// const mint = async () => {
//     const signer = library?.getSigner();
//     const contract = await new ethers.Contract(contractAddress, abi, signer);
//     const tx = await contract.mint();
//     console.log("tx :", tx);
//   };

// }

export const getContract = async (library, from, to, tokenId) => {
    const provider = await new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner();
    console.log('library', library)
    console.log('signer', signer)
    const contract = await new ethers.Contract(contractAddress, abi, signer);
    console.log('to', to)
    console.log('contract', contract)
    const tx = await contract.mint(to);
    console.log("tx :", tx);

}