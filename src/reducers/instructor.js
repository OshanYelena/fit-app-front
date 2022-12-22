import {
  MEAL_PLAN_CREATED,
  MEAL_PLAN_ERROR,
  EXER_PLAN_CREATED,
  EXER_PLAN_ERROR,
  EXER_LOADED,
  MEAL_LOADED,
  ROLE_UPDATE
} from "../actions/types";

const initialState = {

  exer: [{}],
  meal: [{}],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  console.log("Oshan",type)

  switch (type) {
    case MEAL_PLAN_CREATED:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
      case MEAL_PLAN_CREATED:
        return {
          ...state,
          profile: payload,
          loading: false,
        };
    case ROLE_UPDATE:
      return {
        ...state,
        
        profile: payload,
        loading: false,
      };
    case EXER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        exer: payload,
      };
    case MEAL_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        meal: payload,
      };

    case EXER_PLAN_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case MEAL_PLAN_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
