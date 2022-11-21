import { Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ActivateAccount from "./pages/activateAccount";
import ProfilePage from "./pages/Profile";
import Home from "./pages/home";
import ProtectedRoute from "./routes/protectedRoute";
import Auth from "./pages/Auth";
import NotProtectedRoute from "./routes/notProtectedRoute";
import ForgetPassword from "./pages/forgetPassword";
import ChangePassword from "./pages/changepassword";
import Posts from "./pages/Profile/posts";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/:username" element={<ProfilePage />}>
            <Route index={true} path="posts" element={<Posts />} />
          </Route>

          <Route path="activate/:token" element={<ActivateAccount />} />
          <Route path="changepassword" element={<ChangePassword />} />
        </Route>
        <Route element={<NotProtectedRoute />}>
          <Route path="/auth" element={<Auth />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

// route Home => render conditionally either the Register or home of the user screen
// yourprofile => profile page
// post => post page
// userprofilev=> profile
// forget =>forget Page
// activateAccount => activation page
