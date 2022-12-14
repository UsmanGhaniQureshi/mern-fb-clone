import { useSelector } from "react-redux";
import FBContacts from "../components/FBContacts";
import Header from "../components/Header";
import LeftAside from "../components/LeftAside";
import MainHome from "../components/MainHome";

const Home = () => {
  const { user } = useSelector((state) => state);
  return (
    <div>
      <Header />
      <div className="flex justify-between">
        <LeftAside user={user} />
        <MainHome />
        <FBContacts />
      </div>
    </div>
  );
};

export default Home;
