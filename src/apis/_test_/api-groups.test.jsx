import {changeGroup,createGroup,getGroups,initialState} from "../api-groups";


describe("changeGroup", () => {
  it("should return a function", () => {
    expect(typeof changeGroup).toBe("function");
  });
});

describe("api-groups", () => {
  it("should change group", async () => {
    const token = "token";
    const group = "Test";

    const result = await changeGroup(token, group);

    expect(result).toEqual({name: "Test", movies: []});
  });
});

describe("getGroups", () => {
  it("should return groups", async () => {
    const token = "test";
    const result = await getGroups(token);
    expect(result).toEqual(initialState);
  });
});

describe("createGroup", () => {
  it("should create a new group but if name null dont create", async () => {
    const token = "test";
    const result = await createGroup(token,null);
    expect(result).toEqual(initialState);
  });
});

