// import axios from 'axios';

// export const loginAdmin = (admin) => async dispatch => {
//     dispatch({type : 'ADMIN_LOGIN_REQUEST'});
//     try {
//         const response = await axios.post('/api/admins/login',admin);
//         dispatch({type : 'ADMIN_LOGIN_SUCCESS',payload : response.data});
//         localStorage.setItem('currentAdmin', JSON.stringify(response.data));
//         window.location.href = '/';
//     } catch (error) {
//         dispatch({type : 'ADMIN_LOGIN_FAIL',payload : error});
//     }
// };
import axios from 'axios'; //create krne ka treeks ahia post api (method)

export const loginAdmin = (admin) => async dispatch => {
    dispatch({type : 'ADMIN_LOGIN_REQUEST'})
    try {
        const res = await axios.post('/api/adminlogin/login',admin);
        console.log(res);
        dispatch({type : 'ADMIN_LOGIN_SUCCESS'});
        localStorage.setItem('currentAdmin', JSON.stringify(res.data));
        window.location.href = '/';
    } catch (error) {
        dispatch({type : 'ADMIN_LOGIN_FAIL',payload : error})
    }
};

export const logoutAdmin = () => dispatch => {
    localStorage.removeItem('currentAdmin');
    window.location.href = '/';
};