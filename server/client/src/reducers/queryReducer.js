export const querycontact = (state={},action) => {
    switch(action.type){
        case 'QUERY_REQUEST' :
            return{
                loading : true
            }
        case 'QUERY_SUCCESS' :
            return{
                loading : false,
                success : true
            }
        case 'QUERY_FAIL' :
            return{
                loading : false,
                error : action.payload
            }
        default : return state
    }
};