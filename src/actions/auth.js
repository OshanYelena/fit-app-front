import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import { setAlert } from "./alert";
import {
  AUTH_ERROR,
  CLEAR_PROFILE,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
} from "./types";

const api = axios.create({
  // baseURL: "https://col-back.herokuapp.com/api/v1",
  baseURL: "http://localhost:5001",
});

//load user
export const loadUser = () => async (dispatch) => {
  
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
 
  try {
    const res = await api.get("/member/info", {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    });
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    console.log(err)
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//load user
export const loadInstructor = () => async (dispatch) => {
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
try {
  const res = await api.get("/instructor/info", {
      headers: {
          "Authorization": localStorage.getItem("token")
      }
  });
  dispatch({
    type: USER_LOADED,
    payload: res.data,
  });
} catch (err) {

  dispatch({
    type: AUTH_ERROR,
  });
}
};




//REGISTER USER
export const register =
  ({ name,
    lastname,
    email,
    phone,
    password,
    height,
    weight,
    address,
    occupation,
    dob,
    gender, }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      name,
      lastname,
      email,
      phone,
      password,
      height,
      weight,
      address,
      occupation,
      dob,
      gender,
    });

    try {
      const res = await api.post("/member/register", body, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }

      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };









//LOGIN USER
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await api.post("/member/login", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
   
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout / Clear Profile
export const logout = () => (dispatch) => {
  console.log("jjasdbsahs")
    dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};



export const userConfirm = (token) => async (dispatch) => {
    try {
        console.log("hello")
        const res = await api.post(`/member/activation/${token}`);
        
        // dispatch({
        //   type: LOGIN_SUCCESS,
        //   payload: res.data,
        // });
    
        // dispatch(loadUser());
       
      } catch (err) {
        const errors = err.response.data.errors;
        console.log(err)
        if (errors) {
          errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
        }
    
        dispatch({
          type: LOGIN_FAIL,
        });
      }
}






//REGISTER USER
export const instructorRegister =
  ({ name,
    lastname,
    email,
    phone,
    password,
    address,
    dob,
    nic,
    emgNo,
    gender, }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      name,
      lastname,
      email,
      phone,
      password,
      nic,
      emgNo,
      address,
      dob,
      gender,
    });

    try {
     
      const res = await api.post("/instructor/register", body, config);
      console.log(res)
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }

      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };


//LOGIN USER
export const instructorLogin = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await api.post("/instructor/login", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
   
  } catch (err) {
    console.log(err)
    const errors = err.response.data.errors;


    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};