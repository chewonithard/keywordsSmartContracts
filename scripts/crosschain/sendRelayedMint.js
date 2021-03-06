const main = async () => {
  const contractFactory = await hre.ethers.getContractFactory("RelayReceiverMint");
  const contract = await contractFactory.attach(
    "0xe7CDaE67b2838CdF761a0cbae027C02ea34Caa2f" // ftm
  );

  const dstChainId = 10001
  const dstAddr = "0x522436c730e3c15a2FF27ea84D811fF624618Dd3"; // rinkeby

  let tx = await (
    await contract.relayReceiverMint(
      dstChainId,
      dstAddr,
      16014359, // tokenId
      2, // amount
      { value: ethers.utils.parseEther("15") }
    )
  ).wait();
  console.log(`...tx: ${tx.transactionHash}`);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
