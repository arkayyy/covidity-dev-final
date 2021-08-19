import { combineReducers } from "redux";
import countryStatesReducer from "./countryStates/countryStatesReducer";
import districtsReducer from "./districts/districtsReducer";
import appointmentsReducer from "./appointments/appointmentsReducer";
import donatorsReducer from './donatorsPOST/donatorsReducer';
import storeDonatorReducer from './storeDonator/storeDonatorReducer'
import sendotpReducer from './sendOTP/sendotpReducer'
import fetchOxygenDonorsReducer from './fetchDonors/fetchOxygenDonors/fetchOxygenDonorsReducer'
import SignUpReducer from './signUp/SignUpReducers'
import getLocalUserReducer from './getLocalUser/getLocalUserReducer'
import newPostForumReducer from './newPostForum/newPostForumReducer'
import fetchPostsReducer from './fetchPostsForum/fetchPostsReducer'
import validateTokenReducer from './validateUserToken/validateTokenReducer'
import coordsReducer from './coordsVaccine/coordsReducer'

const rootReducer = combineReducers({
  countryStates: countryStatesReducer,
  districts: districtsReducer,
  appointments: appointmentsReducer,
  donatorRefNo: donatorsReducer,
  donatorData: storeDonatorReducer,
  otptoken: sendotpReducer,
  oxygenDonors: fetchOxygenDonorsReducer,
  signUpSuccessToken: SignUpReducer,
  localUserDetails: getLocalUserReducer,
  newPostInsertionIds: newPostForumReducer,
  fetchedPosts: fetchPostsReducer,
  userSignedInDetails: validateTokenReducer,
  coordinates: coordsReducer
});

export default rootReducer;
