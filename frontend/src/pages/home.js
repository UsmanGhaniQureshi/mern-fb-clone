import FBContacts from "../components/FBContacts";
import Header from "../components/Header";
import LeftAside from "../components/LeftAside";
import MainHome from "../components/MainHome";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-between">
        <LeftAside />
        <MainHome />
        <FBContacts />
      </div>
    </div>
  );
};

export default Home;
