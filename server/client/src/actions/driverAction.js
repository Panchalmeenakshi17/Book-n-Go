import axios from 'axios'; //create krne ka treeks ahia post api (method)

export const registerDriver = (driversign) => async dispatch => {
    dispatch({type : 'DRIVER_REGISTER_REQUEST'})
    try {
        const res = await axios.post('/api/drivers/register',driversign);
        dispatch({type : 'DRIVER_REGISTER_SUCCESS'});
    } catch (error) {
        dispatch({type : 'DRIVER_REGISTER_FAIL',payload : error})
    }
};
export const loginDriver = (driversign) => async dispatch => {
    dispatch({type : 'DRIVER_LOGIN_REQUEST'});
    try {
        const response = await axios.post('/api/drivers/login',driversign);
        console.log(response);
        dispatch({type : 'DRIVER_LOGIN_SUCCESS',payload : response.data});
        localStorage.setItem('currentDriver', JSON.stringify(response.data));
        window.location.href = '/';
    } catch (error) {
        dispatch({type : 'DRIVER_LOGIN_FAIL',payload : error});
    }
};


export const logoutDriver = () => dispatch => {
    localStorage.removeItem('currentDriver');
    window.location.href = '/';
    alert("you are About to logged Out in!");
};

export const getDriverById = (driverId) => async (dispatch) => {
    dispatch({type : 'GET_DRIVERBYID_REQUEST'});
    try {
        const res = await axios.post('/api/drivers/getdriverbyid',{driverId});
        dispatch({type : 'GET_DRIVERBYID_SUCCESS',payload : res.data});
    } catch (err) {
        dispatch({type : 'GET_DRIVERBYID_FAIL',payload : err});
    }
};

export const updateDriver = (updatedDriver) => async (dispatch) => {
    dispatch({type : 'UPDATE_DRIVERBYID_REQUEST'});
    try {
        const res = await axios.post('/api/drivers/updatedriver',{updatedDriver});
        dispatch({type : 'UPDATE_DRIVERBYID_SUCCESS',payload : res.data});
        window.location.href = '/editdriver';
    } catch (err) {
        dispatch({type : 'UPDATE_DRIVERBYID_FAIL',payload : err});
    }
};

export const deleteDriver = (driverId) => async (dispatch) => {
    try {
        await axios.post('/api/drivers/deletedriver',{driverId});
        localStorage.removeItem('currentDriver');
        alert("Driver Deleted Successfully!","success");
        window.location.href = '/';
    } catch (error) {
        alert("Error While Deleting Driver");
    }
};


export const admindeleteDriver = (driverId) => async (dispatch) => {
    try {
        await axios.post('/api/drivers/admindeletedriver',{driverId});
        localStorage.removeItem('currentDriver');
        alert("Driver Deleted Successfully!","success");
        window.location.href = '/DriversList';
    } catch (error) {
        alert("Error While Deleting Driver");
    }
};
// export const getAllDrivers = () => async (dispatch) => {
//     dispatch({type : 'GET_DRIVERS_REQUEST'});
//     try {
//         const res = await axios.get('/api/drivers/getAlldrivers');
//         dispatch({type : 'GET_DRIVER_SUCCESS',payload : res.data});
//     } catch (err) {
//         dispatch({type : 'GET_DRIVER_FAIL',payload : err});
//     }
//   };
  

  export const getAllDrivers = () => async (dispatch) => {
    dispatch({type : 'GET_DRIVERS_REQUEST'});
    try {
        const res = await axios.get('/api/drivers/getAllDrivers');
        dispatch({type : 'GET_DRIVERS_SUCCESS',payload : res.data});
    } catch (err) {
        dispatch({type : 'GET_DRIVERS_FAIL',payload : err});
    }
  };


  export const addDriver = (driver) => async (dispatch) => {
    dispatch({type : 'ADD_DRIVERS_REQUEST'});
    try {
        const res = await axios.post('/api/drivers/adddriver',{driver});
        dispatch({type : 'ADD_DRIVERS_SUCCESS',payload : res.data});
    } catch (err) {
        dispatch({type : 'ADD_DRIVERS_FAIL',payload : err});
    }
  };