const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { isCallTrace } = require("hardhat/internal/hardhat-network/stack-traces/message-trace");

describe("ERC721r", function () {
  let owner
  let lock

  it("Deploying the contract ", async()=>{
     owner = await ethers.getSigners();
     console.log(owner[0].address)

    const Lock = await ethers.getContractFactory("Machine");
    lock = await Lock.deploy();

  })

  it("Minting 10 tokens at a time ", async()=>{
    await lock.mint("2")
    await lock.mint("2")
    const result = await lock.getOwnerIDS(owner[0].address)
    console.log(result.ids)
  })



});
