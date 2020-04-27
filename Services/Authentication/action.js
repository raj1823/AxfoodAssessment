import {
    AUTHENTICATION_FAILURE,
    AUTHENTICATION_SUCCESS,
    CONCEPT_DATA_SUCCESS,
    STORE_DATA_SUCCESS,
    SEARCHED_STORE_DATA_SUCCESS,
    LOGOUT,
    SET_TOKEN
} from './constant'

export function isLoginSuccess(header)
{
    return (
        {
            type: AUTHENTICATION_SUCCESS,
            token: header
        }
    )
}

export function isLoginFailure(error)
{
    return(
        {
            type:AUTHENTICATION_FAILURE,
            error:error

        }
    )
}

export function isConceptDataSuccess(data)
{
    return(
        { 
            type:CONCEPT_DATA_SUCCESS,
            data:data

        }
    )
}
export function isStoreDataSuccess(data)
{
    return(
        {
            type:STORE_DATA_SUCCESS,
            data:data
        }
    )
}

export function isSearchedStoreDataSuccess(data)
{
    return(
        {
            type: SEARCHED_STORE_DATA_SUCCESS,
            data:data
        }
    )
}

export const isLoggedOut =()=>dispatch=>
{ 
    
        dispatch( {
            type:LOGOUT
        })
    

}
// export const setUserToken=(token)=>dispatch=>
// {
//     dispatch(
//         { 
//             type:SET_TOKEN,
//             token:token
//         }
//     )
// }



