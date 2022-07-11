const CoolCats = artifacts.require("CoolCats");

module.exports = function (deployer) {
  deployer.deploy(CoolCats);
};
