const SoundSkiers = artifacts.require("SoundSkiers");

const creatorAccount = "0x627306090abaB3A6e1400e9345bC60c78a8BEf57" // test accounts[0]

module.exports = function (deployer) {
  deployer.deploy(SoundSkiers,"https://www.side-chain.xyz/", creatorAccount);
};
