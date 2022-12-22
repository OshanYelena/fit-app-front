import axios from "axios";

import {
  EXER_PLAN_ERROR,

  MEMBER_LOADED
} from "./types";

const api = axios.create({
  // baseURL: "https://col-back.herokuapp.com/api/v1",
  baseURL: "http://localhost:5001",
});





export const getAllMembers = () => async (dispatch) => {
    try {
      const res = await api.get("/member/allmember_info");
      console.log(res)
      dispatch({
        type: MEMBER_LOADED,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: EXER_PLAN_ERROR,
      });
    }
  };
