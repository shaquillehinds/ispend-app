import authReducer from "../../reducers/auth";

test("should return login state", () => {
  const loginAction = {
    type: "LOGIN",
    uid: "1234",
  };
  const newState = authReducer({}, loginAction);
  expect(newState).toEqual({ uid: "1234" });
});

test("should return logout state", () => {
  const logoutAction = { type: "LOGOUT" };
  const newState = authReducer({ uid: "1234" }, logoutAction);
  expect(newState).toEqual({});
});
