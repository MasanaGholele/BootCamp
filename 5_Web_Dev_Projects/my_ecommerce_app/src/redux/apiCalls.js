import {
  loginFailure, loginStart, loginSuccess,
  logoutStart, logoutFailure, logoutSuccess,
  addUserStart, addUserSuccess, addUserFailure
} from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    console.log("Login failed", err)
    dispatch(loginFailure());
  }
};

export const addUser = async (dispatch, user) => {
  dispatch(addUserStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(addUserSuccess(res.data));
  } catch (err) {
    console.log("addUser failed", err)
    dispatch(addUserFailure());
  }
}

export const logout = async (dispatch) => {
  try {
    dispatch(logoutStart())
    dispatch(logoutSuccess())
  } catch (err) {
    console.log("Logout failed", err);
    dispatch(logoutFailure());
  }
}

export const subscribe = async (email) => {
  try {
    const res = await publicRequest.post("/subscribers/subscribe", { email: email });  
    return {success: true, message: "Sign-up successful"};
  } catch (err) {    
    console.log(err.response.data)
    return err.response.data;
  }
}