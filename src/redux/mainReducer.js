import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn21184135Reducer from '../features/SignIn21184135/redux/reducers'
import SignUp22184134Reducer from '../features/SignUp22184134/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn21184135: SignIn21184135Reducer,
SignUp22184134: SignUp22184134Reducer,

});