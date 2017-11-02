import * as validator from "validator";
import { Activatable } from "../src/Activatable";
import { ActivatableAddress } from "../src/ActivatableAddress";
import { Address } from "../src/Address";
import { Identifiable } from "../src/lib/Identifiable";
import { default as utils } from "../src/lib/Utilities";

describe("ActivatableAddress", () => {
  beforeAll(() => {
    utils.applyMixins(ActivatableAddress, [Address, Activatable]);
  });
  it("can be activated", () => {
    const mixin = new ActivatableAddress("street", "zipCode", "city", "country");
    mixin.activate();
    expect(mixin.isActive).toBe(true);
  });
  it("can be deactivated", () => {
    const mixin = new ActivatableAddress("street", "zipCode", "city", "country");
    mixin.isActive = true;
    mixin.deactivate();
    expect(mixin.isActive).toBe(false);
  });
  it("id is autogenerated", () => {
    const mixin = new ActivatableAddress("street", "zipCode", "city", "country");
    expect(validator.isUUID(mixin.id)).toEqual(true);
  });
  it("address properties are set", () => {
    const mixin = new ActivatableAddress("street", "zipCode", "city", "country");
    expect(mixin.street).toEqual("street");
  });
});
