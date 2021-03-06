import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";
import "./tasks/block-number";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "@typechain/hardhat";

require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY!;
const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL!;
const ETHER_SCAN_API_KEY = process.env.API_KEY!;
const COIN_MARKET_CAP_API_KEY = process.env.COIN_MARKET_CAP_API_KEY!;

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 4,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      // accounts: [PRIVATE_KEY], // Hardhat node did that shit for you
      chainId: 31337,
    },
  },
  solidity: "0.8.9",
  etherscan: {
    apiKey: ETHER_SCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
    noColors: true,
    outputFile: "gas-reported.txt",
    coinmarketcap: COIN_MARKET_CAP_API_KEY,
  },
};

export default config;
