import { ethers } from "hardhat";

async function main() {
  
  // const budyToken = await ethers.deployContract("BudyToken");
  // await budyToken.waitForDeployment();

  
  const budyPlatform = await ethers.deployContract("BudyPlatform");
  await budyPlatform.waitForDeployment();
 
  // const BudyPlatformFactory = await ethers.deployContract("BudyPlatformFactory");
  // await BudyPlatformFactory.waitForDeployment();



  // console.log(`BudyToken has been deployed to ${budyToken.target}`); // 0x72Bf75788F41175d6741DF740CA67Ea67cB13c27
  console.log(`BudyPlatform has been deployed to ${budyPlatform.target}`);
  // console.log(`BudyPlatformFactory has been deployed to ${BudyPlatformFactory.target}`); // 0x7d97b692c67f9A484C7b6Ded046AD7D7D486eBD8 // 0x007209d5254d48793161e0ab5568ecd1dad001160f0706e710d8da38e466561a
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
