import {AUTHENTICATION_FAILURE,AUTHENTICATION_SUCCESS} from './constant'

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