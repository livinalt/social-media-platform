import { ethers } from "hardhat";

async function main() {

  const owner = await ethers.getSigner();
  
  const budyToken = await ethers.deployContract("BudyToken");
  await budyToken.waitForDeployment();

  
  const budyPlatform = await ethers.deployContract("BudyPlatform");
  await budyPlatform.waitForDeployment();
 
  const BudyPlatformFactory = await ethers.deployContract("BudyPlatformFactory");
  await BudyPlatformFactory.waitForDeployment();

  const factoryAddress = "0xe45F0f02957373A5ddB70594e56bbD540e9dF7d5"

  // console.log(`BudyToken has been deployed to ${budyToken.target}`); // 0xe2bB3ee398EAAeCfad6f2D1aD61BB0BbE45097A5
  console.log(`BudyPlatform has been deployed to ${ }`);
  // console.log(`BudyPlatformFactory has been deployed to ${BudyPlatformFactory.target}`); // 0xe45F0f02957373A5ddB70594e56bbD540e9dF7d5 // 
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
