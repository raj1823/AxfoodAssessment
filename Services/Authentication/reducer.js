import {AUTHENTICATION_FAILURE,AUTHENTICATION_SUCCESS}  from './constant'



const initialState={
    
    
    success : false,
    error: null,
    
    token: ''

}

const authenticate_Reducer = (state=initialState ,action) => {

    switch(action.type) {
       
        case AUTHENTICATION_SUCCESS:
            return {
                ...state,
               
                success: true,
               
                token: action.token
                
            }
        case AUTHENTICATION_FAILURE:
            return {
                ...state,
                
                success: false,
                error:action.error
              
            }
        default: 
            return state;
    }
}



export default authenticate_Reducer