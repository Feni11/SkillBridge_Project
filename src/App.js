import "./App.css";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";

// Auth Page
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import ForgotPass from "./Pages/Auth/ForgotPass";

// Layout Page
import Header from "./Pages/components/layout/Header";
import Footer from "./Pages/components/layout/Footer";

// user visit bashboard
import Home from "./Pages/HomePage/Home";

//Quick link
import SkillPage from "./Pages/Quick_Links/SkillPage";
import AboutUsPage from "./Pages/Quick_Links/AboutUsPage";
import FAQ from "./Pages/Quick_Links/FAQ";
import Contact_us from "./Pages/Quick_Links/ContactUsPage";

// User Profile
import ProfileDashboard from "./Pages/UserProfileDashboard/ProfileDashboard";
import UserSkill from "./Pages/UserProfileDashboard/UserSkill";
import UserAvailability from "./Pages/UserProfileDashboard/UserAvailability";
import UserSwap from "./Pages/UserProfileDashboard/UserSwap";
import UserRequest from "./Pages/UserProfileDashboard/UserRequest";
import UserProfile from "./Pages/UserProfileDashboard/UserProfile";

// Admin Profile
import Sidebar from "./Pages/Admin/Sidebar";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AdminUsers from "./Pages/Admin/AdminUsers";
import AdminSwapUsers from "./Pages/Admin/AdminSwapUsers";
import AdminSkillCategories from "./Pages/Admin/AdminSkillCategories";
import AdminContactMess from "./Pages/Admin/AdminContactMess";
import AdminVerified from "./Pages/Admin/AdminVerified";
import AdminSkillApproval from "./Pages/Admin/AdminSkillApproval";
import AdminComplaints from "./Pages/Admin/AdminComplaints";
import AdminSettings from "./Pages/Admin/AdminSettings";
import Chatbox from "./Pages/components/layout/Chatbox";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* Auth */}
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/forgotPass">
            <ForgotPass />
          </Route>

          <Route path="/chatbox">
            <Chatbox />
          </Route>

          {/* Admin Profile */}

          {/* Done Responsive */}
          <Route path="/admin" exact>
            <AdminDashboard />
          </Route>

          {/* Done Responsive */}
          <Route path="/admin/dashboard">
            <AdminDashboard />
          </Route>

          {/* Done Responsive */}
          <Route path="/admin/users">
            <AdminUsers />
          </Route>

          {/* Done Responsive */}
          <Route path="/admin/skillCategory">
            <AdminSkillCategories />
          </Route>

          {/* Done Responsive */}
          <Route path="/admin/swapUsers">
            <AdminSwapUsers />
          </Route>

          {/* Done Responsive */}
          <Route path="/admin/skillApproval">
            <AdminSkillApproval />
          </Route>

          {/* Done Responsive */}
          <Route path="/admin/complaints">
            <AdminComplaints />
          </Route>

          {/* Done Responsive */}
          <Route path="/admin/verifiedBadge">
            <AdminVerified />
          </Route>

          {/* Done Responsive */}
          <Route path="/admin/ContactMess">
            <AdminContactMess />
          </Route>

          {/* Done Responsive */}
          <Route path="/admin/settings">
            <AdminSettings />
          </Route>

          {/* User Profile */}
          <Route path="/profile/:subpath?">
            <ProfileDashboard>
              <Switch>
                <Route exact path="/profile/userprofile" component={UserProfile} />
                <Route exact path="/profile/skills" component={UserSkill} />
                <Route exact path="/profile/availability" component={UserAvailability}/>
                <Route exact path="/profile/myswaps" component={UserSwap} />
                <Route exact path="/profile/requests" component={UserRequest} />
                <Route path="/profile" component={UserProfile} />
              </Switch>
            </ProfileDashboard>
          </Route>

          {/* User Visited Dashboard */}
          <Route>
            <Header />
            <Switch>
              <Route path="/skills">
                <SkillPage />
              </Route>

              <Route path="/aboutUs">
                <AboutUsPage />
              </Route>

              <Route path="/faq">
                <FAQ />
              </Route>

              <Route path="/ContactUs">
                <Contact_us />
              </Route>

              <Route path="/">
                <Home />
              </Route>
            </Switch>
            <Footer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
