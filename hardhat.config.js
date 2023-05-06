require("@nomicfoundation/hardhat-toolbox");
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString();
const apiKey = "1cf118cc5aa34198b6d106aed74304b5"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
 networks: {
  hardhat: {
    chainId: 1337,
  },
  mumbai: {
    url:`https://polygon-mumbai.infura.io/v3/1cf118cc5aa34198b6d106aed74304b5`,
    accounts: [privateKey]
  },

 }

};
