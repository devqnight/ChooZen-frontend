import {groups} from "../groups.reducer";

test("should return CHANGE_GROUP_FAILURE", () => {
  const action = {
    type: "CHANGE_GROUP_FAILURE",
    payload: {
      error: "error"
    }
  };
  const state = groups(undefined, action);
  expect(state).toEqual({
    ...state
  });
});

test("should return CHANGE_GROUP_SUCCESS", () => {
  const action = {
    type: "CHANGE_GROUP_SUCCESS",
    payload: {
      group: {
        id: 1,
        name: "group"
      }
    }
  };
  const state = groups(undefined, action);
  expect(state).toEqual({
    ...state
  })
});

test("should return CHANGE_GROUP_REQUEST", () => {
  const action = {
    type: "CHANGE_GROUP_REQUEST",
    payload: {
      group: {
        id: 1,
        name: "group"
      }
    }
  };
  const state = groups(undefined, action);
  expect(state).toEqual({
    ...state
  })
});