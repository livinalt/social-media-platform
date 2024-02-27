import { ethers } from "hardhat";

async function main() {
  
  // const budyToken = await ethers.deployContract("BudyToken");
  // await budyToken.waitForDeployment();

  
  // const budyPlatform = await ethers.deployContract("BudyPlatform");
  // await budyPlatform.waitForDeployment();
 
  const BudyPlatformFactory = await ethers.deployContract("BudyPlatformFactory");
  await BudyPlatformFactory.waitForDeployment();



  // console.log(`BudyToken has been deployed to ${budyToken.target}`); // 0x38C09eF13F988BE3dB073CFD8e4ed874eeDD5acD
  // console.log(`BudyPlatform has been deployed to ${budyPlatform.target}`);
  console.log(`BudyPlatformFactory has been deployed to ${BudyPlatformFactory.target}`); // 0xD426581713Dd89ac11aC65Fa53ffAc89D7e024bC // 0x007209d5254d48793161e0ab5568ecd1dad001160f0706e710d8da38e466561a
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
