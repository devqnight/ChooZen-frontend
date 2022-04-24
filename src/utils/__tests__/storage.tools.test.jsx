import {getFromStorage, removeStorage, setStorage} from '../storage.tools';

it("getFromStorage", async () => {
  const data = await getFromStorage("test");
  expect(data).toBe(null);
});

it("setStorage", async () => {
  const data = {
    name: "John",
    age: 30
  };

  const result = await setStorage("test", data);
  expect(result).toBe(true);
});

it("removeStorage", async () => {
  await setStorage("test", "test");
  const result = await removeStorage("test");
  expect(result).toBe(true);
});