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
import Sidebar from "./Pages/Admin/AdminDashboard";

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
            <ForgotPass/>
          </Route>

          {/* Admin Profile */}
          <Route path="/Admin">
            <Sidebar />
          </Route>

          {/* User Profile */}
          <Route path="/dashboard/profile">
            <UserProfile />
          </Route>

          <Route path="/dashboard/skills">
            <UserSkill />
          </Route>

          <Route path="/dashboard/availability">
            <UserAvailability />
          </Route>

          <Route path="/dashboard/myswaps">
            <UserSwap />
          </Route>

          <Route path="/dashboard/requests">
            <UserRequest />
          </Route>

          <Route path="/dashboard">
            <UserProfile />
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
