import axios from "axios";
import { setAlert } from "./alert";
import {
  EXER_PLAN_CREATED,
  EXER_PLAN_ERROR,
  MEAL_PLAN_CREATED,
  MEAL_PLAN_ERROR,
  EXER_LOADED,
  MEAL_LOADED,
  ROLE_UPDATE
} from "./types";

const api = axios.create({
  // baseURL: "https://col-back.herokuapp.com/api/v1",
  baseURL: "http://localhost:5001",
});

// Get current users profile

// Create Meal Plan

export const createMealPlan =
  ({
    id,
    mealName,
    monday,
    group,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
  }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      id,
      mealName,
      monday,
      group,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday,
    });
    try {
      const res = await api.post("/instructor/meal_plan", body, config);

      dispatch({
        type: MEAL_PLAN_CREATED,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: MEAL_PLAN_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

export const createExercies =
  ({ bodyPart, equipment, gifUrl, name, target, group }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      bodyPart,
      equipment,
      group,
      gifUrl,
      name,
      target,
    });
    console.log(body);
    try {
      const res = await api.post("/instructor/exercies_plan", body, config);

      dispatch({
        type: EXER_PLAN_CREATED,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: EXER_PLAN_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

  export const patchInstructorRole = (id, index) => async (dispatch) => {
    try {
      console.log(index)
      const res = await api.patch("/instructor/role/update/", {id, index});
      console.log(res);
      dispatch({
        type: ROLE_UPDATE,
        payload: res.data,
      });
    } catch (err) {
      console.log(err)
      dispatch({
        type: EXER_PLAN_ERROR,
      });
    }
  };



export const getExercises = () => async (dispatch) => {
  try {
    const res = await api.get("/instructor/exercies_plan");
    console.log(res);
    dispatch({
      type: EXER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: EXER_PLAN_ERROR,
    });
  }
};

export const getMeals = () => async (dispatch) => {
  try {
    const res = await api.get("/instructor/meal_plan");
    dispatch({
      type: MEAL_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: EXER_PLAN_ERROR,
    });
  }
};
