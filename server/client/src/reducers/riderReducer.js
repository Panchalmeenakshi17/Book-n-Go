export const registerRiderReducer = (state={},action) => {
    switch(action.type){
        case 'RIDER_REGISTER_REQUEST' :
            return{
                loading : true
            }
        case 'RIDER_REGISTER_SUCCESS' :
            return{
                loading : false,
                success : true
            }
        case 'RIDER_REGISTER_FAIL' :
            return{
                loading : false,
                error : action.payload
            }
        default : return state
    }
};

export const loginRiderReducer = (state={},action) => {
    switch(action.type){
        case 'RIDER_LOGIN_REQUEST' :
            return{
                loading : true
            }
        case 'RIDER_LOGIN_SUCCESS' :
            return{
                loading : false,
                success : true,
                currentRider : action.payload
            }
        case 'RIDER_LOGIN_FAIL' :
            return{
                loading : false,
                error : action.payload
            }
        default : return state
    }
};


export const getAllRidersReducer = (state = {riders : []}, action) => {
    switch(action.type){
      case 'GET_RIDERS_REQUEST' :
          return {
              ...state,
              loading : true
          }
      case 'GET_RIDERS_SUCCESS' :
          return {
              riders : action.payload,
              loading : false
          }
      case 'GET_RIDERS_FAIL' :
          return {
              error : action.payload,
              loading : false
          }
      default : return state
    }
};

export const getRiderByIdReducer = (state = {}, action) => {
    switch(action.type){
      case 'GET_RIDERBYID_REQUEST' :
          return {
              ...state,
              loading : true
          }
      case 'GET_RIDERBYID_SUCCESS' :
          return {
              rider : action.payload,
              loading : false
          }
      case 'GET_RIDERBYID_FAIL' :
          return {
              error : action.payload,
              loading : false
          }
      default : return state
    }
};

export const updateRiderByIdReducer = (state = {}, action) => {
    switch(action.type){
      case 'UPDATE_RIDERBYID_REQUEST' :
          return {
              ...state,
              loading : true
          }
      case 'UPDATE_RIDERBYID_SUCCESS' :
          return {
              updatesuccess : true,
              updateloading : false
          }
      case 'UPDATE_RIDERBYID_FAIL' :
          return {
              updateerror : action.payload,
              updateloading : false
          }
      default : return state
    }
};

export const addRiderReducer = (state = {}, action) => {
    switch(action.type){
      case 'ADD_RIDERS_REQUEST' :
          return {
              ...state,
              loading : true
          }
      case 'ADD_RIDERS_SUCCESS' :
          return {
              success : true,
              loading : false
          }
      case 'ADD_RIDERS_FAIL' :
          return {
              error : action.payload,
              loading : false
          }
      default : return state
    }
};

