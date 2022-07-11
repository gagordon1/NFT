const SoundSkiers = artifacts.require("SoundSkiers");



contract("SoundSkiers", (accounts) => {
  const creatorAccount = accounts[0]
  const testAccount = accounts[1]
  it("should give creator account the first skier", async () =>{
    const instance = await SoundSkiers.deployed();
    const creatorBalance = await instance.balanceOf(creatorAccount);
    const testBalance = await instance.balanceOf(testAccount);
    assert.equal(creatorBalance.words[0], 1, "1 skier was not in the first account after construction.");
    assert.equal(testBalance.words[0], 0, "An account with no skiers is showing a skier.");

    const tokenOwner = await instance.ownerOf(0);
    assert.equal(tokenOwner, creatorAccount, "Creator does not own token 0 after construction.");
  });
  it("should have the correct token URI", async () =>{
    const instance = await SoundSkiers.deployed();
    let uri = await instance.tokenURI(0);
    assert.equal(uri, "https://www.side-chain.xyz/0", "token uri is not correct.")
  });
  it("should allow correct transfers between accounts", async () =>{
    const instance = await SoundSkiers.deployed();
    await instance.transferFrom(creatorAccount, testAccount, 0, {from : creatorAccount})
    const creatorBalance = await instance.balanceOf(creatorAccount);
    const testBalance = await instance.balanceOf(testAccount) //test account
    assert.equal(creatorBalance.words[0], 0, "The account that transferred their skier's balance is not 0");
    assert.equal(testBalance.words[0], 1, "The account that should've received a skier's balance is not 1");
  });
});
