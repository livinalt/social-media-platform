import { ethers } from "hardhat";

async function main() {
  
  const budyToken = await ethers.deployContract("BudyToken");
  await budyToken.waitForDeployment();

  
  const BudyPlatform = await ethers.deployContract("BudyPlatform");
  await BudyPlatform.waitForDeployment();
 
  const BudyPlatformFactory = await ethers.deployContract("BudyPlatformFactory");
  await BudyPlatformFactory.waitForDeployment();



  console.log(`BudyToken has been deployed to ${budyToken.target}`);
  console.log(`BudyPlatform has been deployed to ${BudyPlatform.target}`);
  console.log(`BudyPlatformFactory has been deployed to ${BudyPlatformFactory.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
