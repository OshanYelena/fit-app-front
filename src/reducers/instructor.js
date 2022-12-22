import {
  MEAL_PLAN_CREATED,
  MEAL_PLAN_ERROR,
  EXER_PLAN_CREATED,
  EXER_PLAN_ERROR,
  EXER_LOADED,
  MEAL_LOADED,
  ROLE_UPDATE,
  INSTRUC_LOADED,
  MEMBER_LOADED,
  ADD_GROUP,
  ADD_GROUP_ERROR,
  MSG_LOAD
} from "../actions/types";

const initialState = {

  exer: [{}],
  instructors :[{}],
  messages: [{}],
  meal: [{}],
  members:[{}],
  loading: true,
  error: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  console.log(payload)
  switch (type) {
    case MEAL_PLAN_CREATED:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
      case MSG_LOAD:
        return {
          ...state,
          messages: payload,
          loading: false,
        };
      case ADD_GROUP:
        return {
          ...state,
          profile: payload,
          loading: false,
        };
      case MEMBER_LOADED:
      return {
        ...state,
        members: payload,
        loading: false,
      };
      case INSTRUC_LOADED:
        return {
          ...state,
          instructors: payload,
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
      case ADD_GROUP_ERROR:
        return {
          ...state,
          error: "1",
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
