const SoundSkiers = artifacts.require("SoundSkiers");

const ownerAccount = "0x468452829705ACE2579Fef3FAE59333Ac33b1CA8"

contract("SoundSkiers", () => {
  it("should give owner account the first skier", async () =>{
    const instance = await SoundSkiers.deployed();
    const balance = await instance.balanceOf(ownerAccount);
    assert.equal(balance.words[0], 1, "1 skier was not in the first account after construction.");
  });
});
