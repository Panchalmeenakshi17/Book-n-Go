export const bookRideReducer = (state={},action) => {
    switch(action.type){
        case 'BOOK_RIDE_REQUEST' :
            return {
                loading : true
            }
        case 'BOOK_RIDE_SUCCESS' :
            return {
                loading : false,
                success : true
            }
        case 'BOOK_RIDE_FAIL' :
            return {
                loading : false,
                error : action.payload
            }
        default : return state
    }
};