import { authConstants } from "../actions/constants";

const initState = {
    token: null,
    user: {
        firstName: '',
        lastName: '',
        email: '',
        picture: ''
    },
    authenticate: false,
    authenticating: false
}

export default (state = initState, action) => {
  console.log(action);

   switch(action.type){
       case authConstants.LOGIN_REQUEST:
            state = {
                ...state,     // split the existing state
                authenticating: true

            }
            break;

        case authConstants.LOGIN_SUCCESS:
            state = {
                ...state,     // split the state so that we can overwrite its value
                user: action.payload.user,
                token: action.payload.token,
                authenticate: true,
                authenticating: false
            }
            break;

   }


   return state;
}