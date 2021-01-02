import  isLogged from '../actions/isLogged';

const loggedReducer =(state=false,action)=>{
    switch(action.type){
        case "SIGNED_IN":
            return !state;
        default:
            return state;
    }
}

export default loggedReducer;