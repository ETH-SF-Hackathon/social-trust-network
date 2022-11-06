import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract SBT is ERC1155 {
    address owner;
    uint nftId;
    string ipfsUrl = "ipfs://QmdNwGX2vWipg9sH8hyXYDvU6NMM5M7zS1ChzFPGgcoCmH/1.json";
    
    constructor() ERC1155(ipfsUrl) {
        owner = msg.sender;
    }

    function mint(
        address to,
        uint256,
        uint256,
        bytes memory data
     ) public {
        require(to != msg.sender, "You can't mint wrappy SBT by yourself");
        _mint(to, nftId, 1, "");
        nftId++;
    }

    function burn(uint256 tokenId, address userAddress, uint amount) public {
        require(msg.sender == owner, "Now Allowed");
        _burn(userAddress, tokenId, amount);
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