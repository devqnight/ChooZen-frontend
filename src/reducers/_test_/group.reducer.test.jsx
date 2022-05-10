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
    ...state,isLoading: false
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
    ...state,isLoading: false,
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
    ...state,isLoading: true
  })
});

test("should return CHANGE_GROUP_FAILURE", () => {
  const action = {
    type: "CHANGE_GROUP_FAILURE",
    payload: {
      error: "error"
    }
  };
  const state = groups(undefined, action);
  expect(state).toEqual({
    ...state,isLoading: false
  });
});

test("should return CREATE_GROUP_FAILURE", () => {
  const action = {
    type: "CREATE_GROUP_FAILURE",
    payload: {
      error: "error"
    }
  };
  const state = groups(undefined, action);
  expect(state).toEqual({
    ...state,isLoading: false
  });
});

test("should return CREATE_GROUP_SUCCESS", () => {
  const action = {
    type: "CREATE_GROUP_SUCCESS",
    payload: {
      group: {
        id: 1,
        name: "group"
      }
    }
  };
  const state = groups(undefined, action);
  expect(state).toEqual({
    ...state,isLoading: false
  })
});

test("should return CREATE_GROUP_REQUEST", () => {
  const action = {
    type: "CREATE_GROUP_REQUEST",
    payload: {
      group: {
        id: 1,
        name: "group"
      }
    }
  };
  const state = groups(undefined, action);
  expect(state).toEqual({
    ...state,isLoading: true
  });
});

test("should return FETCH_GROUPS_FAILURE", () => {
  const action = {
    type: "FETCH_GROUPS_FAILURE",
    payload: {
      error: "error"
    }
  };
  const state = groups(undefined, action);
  expect(state).toEqual({
    ...state,isLoading: false
  });
});

test("should return FETCH_GROUPS_SUCCESS", () => {
  const action = {
    type: "FETCH_GROUPS_SUCCESS",
    payload: {
      groups: {
        id: 1,
        name: "group"
      }
    }
  };
  const state = groups(undefined, action);
  expect(state).toEqual({
    ...state,isLoading: false,

  })
});

test("should return FETCH_GROUPS_REQUEST", () => {
  const action = {
    type: "FETCH_GROUPS_REQUEST",
    payload: {
      groups: {
        id: 1,
        name: "group"
      }
    }
  };
  const state = groups(undefined, action);
  expect(state).toEqual({
    ...state,isLoading: true
  });
});

test("should return FETCH_GROUP_FAILURE", () => {
  const action = {
    type: "FETCH_GROUP_FAILURE",
    payload: {
      error: "error"
    }
  };
  const state = groups(undefined, action);
  expect(state).toEqual({
    ...state,isLoading: false
  });
});

test("should return FETCH_GROUP_SUCCESS", () => {
  const action = {
    type: "FETCH_GROUP_SUCCESS",
    payload: {
      group: {
        id: 1,
        name: "group"
      }
    }
  };
  const state = groups(undefined, action);
  expect(state).toEqual({
    ...state,isLoading: false
  });
});

test("should return FETCH_GROUP_REQUEST", () => {
  const action = {
    type: "FETCH_GROUP_REQUEST",
    payload: {
      group: {
        id: 1,
        name: "group"
      }
    }
  };
  const state = groups(undefined, action);
  expect(state).toEqual({
    ...state,isLoading: true
  });
});

test("should return DELETE_GROUP_FAILURE", () => {
  const action = {
    type: "DELETE_GROUP_FAILURE",
    payload: {
      error: "error"
    }
  };
  const state = groups(undefined, action);
  expect(state).toEqual({
    ...state,isLoading: false
  });
});

test("should return DELETE_GROUP_SUCCESS", () => {
  const action = {
    type: "DELETE_GROUP_SUCCESS",
    payload: {
      group: {
        id: 1,
        name: "group"
      }
    }
  };
  const state = groups(undefined, action);
  expect(state).toEqual({
    ...state,isLoading: false
  });
});

test("should return DELETE_GROUP_REQUEST", () => {
  const action = {
    type: "DELETE_GROUP_REQUEST",
    payload: {
      group: {
        id: 1,
        name: "group"
      }
    }
  };
  const state = groups(undefined, action);
  expect(state).toEqual({
    ...state,isLoading: true
  });
});