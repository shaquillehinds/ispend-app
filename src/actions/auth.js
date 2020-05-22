import { firebase, googleAuthProvider } from "../firebase/firebase";

export const startLogin = () => {
  return async (dispatch) => {
    const signIn = await firebase.auth().signInWithPopup(googleAuthProvider);
    return signIn;
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    const logOut = await firebase.auth().signOut();
    return logOut;
  };
};

export const login = (uid) => ({
  type: "LOGIN",
  uid,
});

export const logout = () => ({
  type: "LOGOUT",
});
