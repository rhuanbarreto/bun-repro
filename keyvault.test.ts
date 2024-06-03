import { describe, it, expect } from "bun:test";
import { DefaultAzureCredential } from "@azure/identity";
import { SecretClient } from "@azure/keyvault-secrets";

const credential = new DefaultAzureCredential({
  additionallyAllowedTenants: ["*"],
});
const kvURL = process.env.KEYVAULT_URL;
if (!kvURL) throw new Error("KEYVAULT_URL is not set");
const client = new SecretClient(kvURL, credential);

describe("always passing test", () => {
  it("should pass", async () => {
    await Promise.all(
      Array(10)
        .fill(0)
        .map(async () => {
          const secret = await client.getSecret("bun-secret");
          expect(secret).not.toBeNull();
        })
    );
  });
});
