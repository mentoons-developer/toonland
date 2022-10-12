import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutUser,
} from "./userRedux";
// import { addProductt } from "./cartRedux2";
import { publicRequest, userRequest } from "../requestMethod";
import { emptyCart } from "./cartRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    console.log(res.data);
    dispatch(loginSuccess(res.data));
    window.location.href = "/explore/mall";
  } catch (err) {
    alert(`Username or password is incorrect, ${err.response.data} `);
    dispatch(loginFailure());
  }
};

// export const addProduct = async (dispatch, cart2) => {
//   // dispatch(addProduct());
//   try {
//     const res = await userRequest.post("/carts", cart2);
//     // dispatch(addProductt(res.data));
//     console.log(res, "sja");
//   } catch (err) {
//     // dispatch(loginFailure());
//     console.log(err);
//   }
// };

export const logout = async (dispatch, user) => {
  try {
    dispatch(logoutUser());
    dispatch(emptyCart());
  } catch (err) {
    console.log(err);
  }
};
