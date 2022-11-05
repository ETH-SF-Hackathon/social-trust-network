// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract WrappySBT is ERC1155 {
    address owner;
    uint nftId = 0;
    string ipfsUrl = "ipfs://QmPbwAWU678GHTxq5coLN2idhRTrWS5qbSNcY8JKx7M6gc";
    
    constructor() ERC1155(ipfsUrl) {
        owner = msg.sender;
        _mint(owner, 0, 1, "");
        nftId++;
    }

    function mint(address to) public {
        require(to != msg.sender || msg.sender == owner, "You can't mint wrappy SBT by yourself");
        _mint(to, nftId, 1, "");
        nftId++;
    }

    function setBaseURI(string memory _ipfsUrl) public {
        require(msg.sender == owner);
        ipfsUrl = _ipfsUrl;
    }

    function _beforeTokenTransfer(
        address,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal pure override{
        require(
            from == address(0) || to == address(0),
            "Not allowed to transfer token"
        );
    }
}
