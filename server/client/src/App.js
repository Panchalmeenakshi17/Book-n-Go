import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import HelpScreen from "./screens/HelpScreen";
import SafetyScreen from "./screens/SafetyScreen";
import Page from "../src/screens/Page";
import Footer from "./components/Footer";
import RiderSignUpScreen from "./screens/riders/RiderSignUpScreen";
import DriverSignUpScreen from "./screens/drivers/DriverSignUpScreen";
import RiderLoginScreen from "./screens/riders/RiderLoginScreen";
import DriverLoginScreen from "./screens/drivers/DriverLoginScreen";
import Header from "./components/Header";
import AboutUsScreen from "./screens/AboutUsScreen";
import ContactUsScreen from "./screens/ContactUsScreen";
import PrivacyPolicyScreen from "./screens/PrivacyPolicyScreen";
import { useSelector } from "react-redux";
import HeaderRider from "./components/HeaderRider";
import LoginFirst from "./components/LoginFirst";
import HeaderDriver from "./components/HeaderDriver";
import AdminDashboardScreen from "./screens/admin/AdminDashboardScreen";
import LoginAdminScreen from "./screens/LoginAdminScreen";
import HeaderAdmin from "./components/HeaderAdmin";
import Driverprofile from "./components/Driverprofile";
import { RiderProfile } from "./components/RiderProfile";
import RiderList from './screens/admin/RidersList';
import EditDriver from "./components/EditDriver";
import DriversList from "./screens/admin/DriversList";
import EditRider from "./components/EditRider";
import AddRider from "./components/AddRider";
import AddDriver from "./components/AddDriver";

const App = () => {
  
  const riderState = useSelector((state) => state.loginRiderReducer);
  const { currentRider } = riderState;

  const driverState = useSelector((state) => state.loginDriverReducer);
  const { currentDriver } = driverState;

  const adminState = useSelector((state) => state.loginAdminReducer);
  const { currentAdmin } = adminState;

  return (
    <Router>
      {currentRider ? (
        <>
          <HeaderRider />
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/riderportal" element={<Page />} />
            <Route exact path="/ContactUs" element={<ContactUsScreen />} />
            <Route exact path="/AboutUs" element={<AboutUsScreen />} />
            <Route exact path="/safety" element={<SafetyScreen />} />
            <Route exact path="/RiderProfile" element={<RiderProfile/>} />
            <Route exact path="/EditRider" element={<EditRider/>} />
            
            
            <Route
              exact
              path="/TermsCondition"
              element={<PrivacyPolicyScreen />}
            />
            <Route exact path="/help" element={<HelpScreen />} />
          </Routes>
        </>
      ) : currentDriver ? (
        <>
          <HeaderDriver />
          <Routes>
            <Route exact path="/riderportal" element={<Page />} />
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/ContactUs" element={<ContactUsScreen />} />
            <Route exact path="/AboutUs" element={<AboutUsScreen />} />
            <Route exact path="/safety" element={<SafetyScreen />} />
            <Route exact path="/Driverprofile" element={<Driverprofile />} />
            <Route exact path="/editdriver" element={<EditDriver />} />
            
            
          
            <Route
              exact
              path="/TermsCondition"
              element={<PrivacyPolicyScreen />}
            />
            <Route exact path="/help" element={<HelpScreen />} />
          </Routes>
        </>
      ) : currentAdmin ? (
        <>
          <HeaderAdmin />
          <Routes>
            <Route exact path="/" element={<AdminDashboardScreen />} />
            <Route exact path="/RidersList" element={<RiderList/>}/>
            <Route exact path="/DriversList" element={<DriversList/>}/>
            <Route exact path="/AddRider" element={<AddRider/>}/>
            <Route exact path="/AddDriver" element={<AddDriver/>}/>


          </Routes>
        </>
      ) : (
        <>
          <Header />
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/LoginFirst" element={<LoginFirst />} />
            <Route exact path="/AboutUs" element={<AboutUsScreen />} />
            <Route exact path="/ContactUs" element={<ContactUsScreen />} />
            <Route
              exact
              path="/TermsCondition"
              element={<PrivacyPolicyScreen />}
            />
            <Route exact path="/safety" element={<SafetyScreen />} />
            <Route exact path="/RiderSignup" element={<RiderSignUpScreen />} />
            <Route exact path="/LoginRider" element={<RiderLoginScreen />} />
            <Route
              exact
              path="/DriverSignup"
              element={<DriverSignUpScreen />}
            />
            <Route exact path="/LoginDriver" element={<DriverLoginScreen />} />
            <Route exact path="/help" element={<HelpScreen />} />
            <Route
              exact
              path="/LoginAdminScreen"
              element={<LoginAdminScreen />}
            />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
};

export default App;
