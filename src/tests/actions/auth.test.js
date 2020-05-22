import { startLogin, startLogout, login, logout } from "../../actions/auth";

test("should return login action object", () => {
  const uid = "1234";
  const actionObject = login(uid);
  expect(actionObject).toEqual({
    type: "LOGIN",
    uid,
  });
});

test("should return logout action object", () => {
  const actionObject = logout();
  expect(actionObject).toEqual({
    type: "LOGOUT",
  });
});
