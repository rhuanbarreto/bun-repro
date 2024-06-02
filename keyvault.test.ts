import { describe, it, expect } from "bun:test";
import { DefaultAzureCredential } from "@azure/identity";
import { SecretClient } from "@azure/keyvault-secrets";

describe("always passing test", () => {
  it("should pass", async () => {
    const credential = new DefaultAzureCredential({
      additionallyAllowedTenants: ["*"],
    });
    const kvURL = process.env.KEYVAULT_URL;
    if (!kvURL) throw new Error("KEYVAULT_URL is not set");
    const client = new SecretClient(kvURL, credential);
    const secret = await client.getSecret("bun-secret");
    expect(secret).not.toBeNull();
  });
});
