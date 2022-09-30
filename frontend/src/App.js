import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import ActivateAccount from "./pages/activateAccount";
import Profile from "./pages/profile";
import Auth from "./pages/Auth";
import Home from "./pages/home";

function App() {
  const { user } = useSelector((state) => state);
  return (
    <div>
      <Routes>
        <Route path="/" element={!user ? <Home /> : <Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/activate/:usertoken" element={<ActivateAccount />} />
      </Routes>
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
