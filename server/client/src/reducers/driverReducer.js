
export const registerDriverReducer = (state={},action) => {
    switch(action.type){
        case 'DRIVER_REGISTER_REQUEST' :
            return{
                loading : true
            }
        case 'DRIVER_REGISTER_SUCCESS' :
            return{
                loading : false,
                success : true
            }
        case 'DRIVER_REGISTER_FAIL' :
            return{
                loading : false,
                error : action.payload
            }
        default : return state
    }
};


export const loginDriverReducer = (state={},action) => {
    switch(action.type){
        case 'DRIVER_LOGIN_REQUEST' :
            return{
                loading : true
            }
        case 'DRIVER_LOGIN_SUCCESS' :
            return{
                loading : false,
                success : true,
                currentDriver : action.payload
            }
        case 'DRIVER_LOGIN_FAIL' :
            return{
                loading : false,
                error : action.payload
            }
        default : return state
    }
};

export const getDriverByIdReducer = (state = {}, action) => {
    switch(action.type){
      case 'GET_DRIVERBYID_REQUEST' :
          return {
              ...state,
              loading : true
          }
      case 'GET_DRIVERBYID_SUCCESS' :
          return {
              driver : action.payload,
              loading : false
          }
      case 'GET_DRIVERBYID_FAIL' :
          return {
              error : action.payload,
              loading : false
          }
      default : return state
    }
};

export const updateDriverByIdReducer = (state = {}, action) => {
    switch(action.type){
      case 'UPDATE_DRIVERBYID_REQUEST' :
          return {
              ...state,
              loading : true
          }
      case 'UPDATE_DRIVERBYID_SUCCESS' :
          return {
              updatesuccess : true,
              updateloading : false
          }
      case 'UPDATE_DRIVERBYID_FAIL' :
          return {
              updateerror : action.payload,
              updateloading : false
          }
      default : return state
    }
};

export const getAllDriversReducer = (state = {drivers : []}, action) => {
    switch(action.type){
      case 'GET_DRIVERS_REQUEST' :
          return {
              ...state,
              loading : true
          }
      case 'GET_DRIVERS_SUCCESS' :
          return {
              drivers : action.payload,
              loading : false
          }
      case 'GET_DRIVERS_FAIL' :
          return {
              error : action.payload,
              loading : false
          }
      default : return state
    }
};



export const addDriverReducer = (state = {}, action) => {
    switch(action.type){
      case 'ADD_DRIVERS_REQUEST' :
          return {
              ...state,
              loading : true
          }
      case 'ADD_DRIVERS_SUCCESS' :
          return {
              success : true,
              loading : false
          }
      case 'ADD_DRIVERS_FAIL' :
          return {
              error : action.payload,
              loading : false
          }
      default : return state
    }
};