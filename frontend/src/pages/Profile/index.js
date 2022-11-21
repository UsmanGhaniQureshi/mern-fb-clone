import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import Header from "../../components/Header";
import ProfileHeader from "../../components/Profile/ProfileHeader";

const ProfilePage = () => {
  const { username } = useParams();

  useEffect(() => {}, [username]);

  return (
    <div>
      <Header />
      <ProfileHeader />
      <div className="max-w-4xl mx-auto px-2 py-1">
        <Outlet />
      </div>
    </div>
  );
};

export default ProfilePage;
