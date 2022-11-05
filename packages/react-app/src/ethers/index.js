import {ethers} from 'ethers'
import { abi } from "./abi";
const contractAddress = "0xb6D8de11789513E130aCa839866a6Aaf94a9dB93";

export const getContract = async (wallet, from, to, tokenId) => {
        const contract = await new ethers.Contract(contractAddress, abi, wallet);
        console.log(contract)

        const tx = await contract.mint(to)
        console.log(tx)

}