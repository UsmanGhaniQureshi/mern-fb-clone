import FBContacts from "../components/FBContacts";
import Header from "../components/Header";
import LeftAside from "../components/LeftAside";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-between">
        <LeftAside />
        <FBContacts />
      </div>
    </div>
  );
};

export default Home;
