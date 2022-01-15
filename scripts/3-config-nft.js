import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xF9Efca83659548bEA1128Bb1BDa635a7bd5c0415",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Unity - Strength in numbers",
        description: "This NFT will give you access to Accountability DAO!",
        image: readFileSync("scripts/assets/unity.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("Failed to create the new NFT", error);
  }
})()