import {
  AUTHENTICATION_FAILURE,
  AUTHENTICATION_SUCCESS,
  CONCEPT_DATA_SUCCESS,
  STORE_DATA_SUCCESS,
  SEARCHED_STORE_DATA_SUCCESS,
  LOGOUT,
  SET_TOKEN
} from './constant';

const initialState = {
  success: false,
  error: null,

  token: '',
  conceptData: [],
  storeData:[],
  storeSearchData:[],


};

const authenticate_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATION_SUCCESS:
      return {
        ...state,

        success: true,

        token: action.token,
      };
    case AUTHENTICATION_FAILURE:
      return {
        ...state,

        success: false,
        error: action.error,
      };
    case CONCEPT_DATA_SUCCESS:
      return {
        ...state,
        conceptData: action.data,
      };
    
    case STORE_DATA_SUCCESS:
      return {
        ...state,
        storeData:action.data
      }

      case SEARCHED_STORE_DATA_SUCCESS:
        return{
          ...state,
          storeSearchData:action.data
        }
        case LOGOUT:
          return{

           ...state,
            success:false,
           // token:'',
            conceptData: [],
            //storeData:[],
           // storeSearchData:[]
          }
          case SET_TOKEN:
            return{
              ...state,
              token:action.token
            }

    default:
      return state;
  }
};

export default authenticate_Reducer;
