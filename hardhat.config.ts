import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const ACCOUNT_PRIVATE_KEY= "8fd68b2aa1e7719bf2f5bfb9ea7004314b594b0b558e3c7327b0f3ba604a11fe"
const ALCHEMY_SEPOLIA_API_KEY_URL = "https://eth-sepolia.g.alchemy.com/v2/IrKacA794mfjNeuRwjIHcDdlrcJBiekz"
const ALCHEMY_MUMBAI_API_KEY_URL = "https://polygon-mumbai.g.alchemy.com/v2/XGx79bmr7bxAIiOr6trKK30oRkW0-z3l"
// const ALCHEMY_MAINNET_API_KEY_URL = "https://eth-mainnet.g.alchemy.com/v2/IrKacA794mfjNeuRwjIHcDdlrcJBiekz"

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    // hardhat: {
    //   forking: {
    //     url: ALCHEMY_MAINNET_API_KEY_URL,
    //   }
    // },
    sepolia: {
      url: ALCHEMY_SEPOLIA_API_KEY_URL,
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
    mumbai: {
      url: ALCHEMY_MUMBAI_API_KEY_URL,
      accounts: [ACCOUNT_PRIVATE_KEY],
    }
  },
};

export default config;
