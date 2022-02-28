import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const fs = require("fs");

const privateKey =
  fs.readFileSync(".secret").toString().trim() || "01234567890123456789";

export default {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },

    // rinkeby: {
    //   url: "process.env.ALCHEMY_API_URL",
    //   accounts: ["process.env.PRIVATE_RINKEBY_ACCOUNT_KEY"],
    // },
    // mumbai: {
    //   url: "https://rpc-mumbai.matic.today",
    //   accounts: [privateKey],
    // },
  },
  solidity: {
    version: "0.8.3",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
