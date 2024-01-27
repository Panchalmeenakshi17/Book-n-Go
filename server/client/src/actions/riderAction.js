import axios from "axios"; //create krne ka treeks ahia post api (method)

export const SigninRider = (rider) => async (dispatch) => {
  dispatch({ type: "RIDER_REGISTER_REQUEST" });
  try {
    const res = await axios.post("/api/riders/register", rider);
    dispatch({ type: "RIDER_REGISTER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "RIDER_REGISTER_FAIL", payload: error });
  }
};

export const loginRider = (rider) => async (dispatch) => {
  dispatch({ type: "RIDER_LOGIN_REQUEST" });
  try {
    const response = await axios.post("/api/riders/login", rider);
    dispatch({ type: "RIDER_LOGIN_SUCCESS", payload: response.data });
    localStorage.setItem("currentRider", JSON.stringify(response.data));
    window.location.href = "/";
  } catch (error) {
    dispatch({ type: "RIDER_LOGIN_FAIL", payload: error });
  }
};

export const logoutRider = () => (dispatch) => {
  localStorage.removeItem("currentRider");
  // const auth = getAuth();
  // signOut(auth)
  //   .then(() => {
  //     // Sign-out successful.
  //   })
  //   .catch((error) => {
  //     // An error happened.
  //   });
  window.location.href = "/";

  alert("You are about to logged out!");
};



export const getAllRiders = () => async (dispatch) => {
  dispatch({type : 'GET_RIDERS_REQUEST'});
  try {
      const res = await axios.get('/api/riders/getAllRiders');
      dispatch({type : 'GET_RIDERS_SUCCESS',payload : res.data});
  } catch (err) {
      dispatch({type : 'GET_RIDERS_FAIL',payload : err});
  }
};

export const getRiderById = (riderId) => async (dispatch) => {
  dispatch({type : 'GET_RIDERBYID_REQUEST'});
  try {
      const res = await axios.post('/api/riders/getriderbyid',{riderId});
      dispatch({type : 'GET_RIDERBYID_SUCCESS',payload : res.data});
  } catch (err) {
      dispatch({type : 'GET_RIDERBYID_FAIL',payload : err});
  }
};

export const updateRider= (updatedRider) => async (dispatch) => {
  dispatch({type : 'UPDATE_RIDERBYID_REQUEST'});
  try {
      const res = await axios.post('/api/riders/updatedrider',{updatedRider});
      dispatch({type : 'UPDATE_RIDERBYID_SUCCESS',payload : res.data});
      window.location.href = '/editRider';
  } catch (err) {
      dispatch({type : 'UPDATE_RIDERBYID_FAIL',payload : err});
  }
};

export const deleteRider = (riderId) => async (dispatch) => {
  try {
      await axios.post('/api/riders/deletedrider',{riderId});
      localStorage.removeItem('currentRider');
      alert("Rider Deleted Successfully!","success");
      window.location.href = '/';
  } catch (error) {
      alert("Error While Deleting Rider");
  }
};

export const admindeleteRider = (riderId) => async (dispatch) => {
  try {
      await axios.post('/api/riders/admindeletedrider',{riderId});
      localStorage.removeItem('currentRider');
      alert("Rider Deleted Successfully!","success");
      window.location.href = '/RidersList';
  } catch (error) {
      alert("Error While Deleting Rider");
  }
};
export const addRider = (rider) => async (dispatch) => {
  dispatch({type : 'ADD_RIDERS_REQUEST'});
  try {
      const res = await axios.post('/api/riders/addrider',{rider});
      dispatch({type : 'ADD_RIDERS_SUCCESS',payload : res.data});
  } catch (err) {
      dispatch({type : 'ADD_RIDERS_FAIL',payload : err});
  }
};
 