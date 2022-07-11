const SoundSkiers = artifacts.require("SoundSkiers");

module.exports = function (deployer) {
  deployer.deploy(SoundSkiers,"https://www.side-chain.xyz");
};
