
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home'
import Support from './components/Support'
import Survey from './components/Survey'
import Tracker from './tracker'
import Donate from './components/Donate'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import fileUpload from './components/fileUpload';
import SupportOxygen from './components/SupportOxygen';
import SupportMed from './components/SupportMed';
import SupportBlood from './components/SupportBlood';
import SupportFood from './components/SupportFood';
import SupportFunds from './components/SupportFunds';
import SupportGadgets from './components/SupportGadgets';
import DonateOxygen from './components/DonateOxygen';
import DonateMed from './components/DonateMed';
import DonateBlood from './components/DonateBlood';
import DonateFood from './components/DonateFood';
import Vaccination from './components/Vaccination';
import VaccinationAPI from './components/VaccinationAPI';
import {useSelector} from 'react-redux';
import {Provider} from 'react-redux';
import store from './redux/store'
import {applyMiddleware, createStore} from 'redux';
//import allReducers from './redux/reducers/reducerIndex';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import ReduxTrial from './components/ReduxTrial'
import MongoTrial from './components/MongoTrial'
import SupportOxygen1 from './components/SupportOxygen1'
import SignInSignUpComponent from './components/SignInSignUpComponent'
import ForumPage from './components/ForumPage'
import MapComponent from './components/MapComponent'
import {validateToken} from './redux/index'
import {connect} from 'react-redux'
import SignInSignUpComp from "./components/SignInSignUpComp";
import SignInOrHome from './components/SignInOrHome'
import LoginPage from "./components/LoginPage";
import CowinScreen from './components/CowinScreen'
<<<<<<< HEAD
import resources from "./resources/resources";
=======
import UserProfile from "./components/UserProfile";
>>>>>>> 6295f332b14bd1faecc8019635bbfb22238dbff3
//import SignInSignUpComp from './components/SignInSignUpComp'

//const store=createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)));

function App() {
  //const statesList=useSelector(state=>state.states);
  return (
    
    <Router>
      <Provider store={store}>
      <div className="app">
        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/vaccination' exact component={()=> <Vaccination />} />
          <Route path="/support" exact component={Support} />
          <Route path="/survey" exact component={Survey} />
          <Route path="/tracker" exact component={Tracker} />
          <Route path="/donate" exact component={Donate}/>
          <Route path="/support_oxygen_tank" exact component={SupportOxygen1} />
          <Route path="/support_medical" exact component={SupportMed} />
          <Route path="/support_blood" exact component={SupportBlood} />
          <Route path="/support_funds" exact component={SupportFunds} />
          <Route path="/support_gadgets" exact component={SupportGadgets} />
          <Route path="/support_food" exact component={SupportFood} />
          <Route path="/donate_oxygen" exact component={DonateOxygen} />
          <Route path="/donate_medicines" exact component={DonateMed} />
          <Route path="/donate_blood" exact component={DonateBlood} />
          <Route path="/donate_food" exact component={DonateFood} />
          <Route path="/mongo" exact component={MongoTrial} />
          <Route path="/signin" exact component={LoginPage} />
          <Route path="/forum" exact component={ForumPage} />
          <Route path="/maps" exact component={MapComponent} />
<<<<<<< HEAD
          <Route path="/resources" exact component={resources} />
=======
          <Route path ="/user-profile" exact component={UserProfile}/>
>>>>>>> 6295f332b14bd1faecc8019635bbfb22238dbff3
          {/* <Route path="/book-vaccine-slot" exact component={CowinScreen} /> */}

        </Switch>

      </div>
      </Provider>
    </Router>
   
  );
}

export default App;
