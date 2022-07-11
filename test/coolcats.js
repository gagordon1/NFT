const CoolCats = artifacts.require("CoolCats");

const ownerAccount = "0x468452829705ACE2579Fef3FAE59333Ac33b1CA8"

contract("CoolCats", () => {
  it("should give owner account the first cat", async () =>{
    const instance = await CoolCats.deployed();
    const balance = await instance.balanceOf(ownerAccount);
    assert.equal(balance.words[0], 1, "1 cool cat was not in the first account after construction.");
  });
});
