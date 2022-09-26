import { Route, Routes } from "react-router-dom";
import ActivateAccount from "./pages/activateAccount";
import Profile from "./pages/profile";
import Register from "./pages/register";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/activate-account" element={<ActivateAccount />} />
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
