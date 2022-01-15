import sdk from "./1-initialize-sdk.js";

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule("0x4Dd804140D1bC1da5556FB24BA3597FF41eC3EE2");

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: "AccountabilityDAO Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "UNITY",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("Failed to deploy token module", error);
  }
})();