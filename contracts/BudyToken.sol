// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";


contract BudyToken is ERC721 {
    constructor() ERC721("BudyToken", "BTK") {}

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

}

// Successfully verified contract BudyToken on the block explorer.
// https://sepolia.etherscan.io/address/0xe2bB3ee398EAAeCfad6f2D1aD61BB0BbE45097A5#code