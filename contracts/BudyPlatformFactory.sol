// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.20;
import './BudyPlatform.sol';

contract BudyPlatformFactory {
    address[] public deployedPlatforms;

    function createPlatform(address owner) public {
        address newPlatform = address(new BudyPlatform(owner));
        deployedPlatforms.push(newPlatform);
    }

    function getDeployedPlatforms() public view returns (address[] memory) {
        return deployedPlatforms;
    }
}