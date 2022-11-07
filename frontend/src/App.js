import { Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ActivateAccount from "./pages/activateAccount";
import Profile from "./pages/profile";
import Home from "./pages/home";
import ProtectedRoute from "./routes/protectedRoute";
import Auth from "./pages/Auth";
import NotProtectedRoute from "./routes/notProtectedRoute";
import ForgetPassword from "./pages/forgetPassword";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="activate" element={<ActivateAccount />} />
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
