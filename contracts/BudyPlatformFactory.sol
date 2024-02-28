// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;
import './BudyPlatform.sol';

contract BudyPlatformFactory {
    address[] public deployedPlatforms;

    function createPlatform(address owner) public {
        BudyPlatform newPlatform = new BudyPlatform(owner);
        address newPlatformAddress = address(newPlatform);
        deployedPlatforms.push(newPlatformAddress);
    }


    function getDeployedPlatforms() public view returns (address[] memory) {
        return deployedPlatforms;
    }
}

// Successfully verified contract BudyPlatformFactory on the block explorer.
// https://sepolia.etherscan.io/address/0xe45F0f02957373A5ddB70594e56bbD540e9dF7d5#code

