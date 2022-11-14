import { View, Text } from "react-native";
import ProfileHeader from "../components/ProfileHeader";
import ProfileContent from "../components/ProfileContent";
import ProfileContent2 from "../components/ProfileContent2";
import ProfileDue from "../components/ProfileDue";
import ProfileTotDue from "../components/ProfileTotDue";
import ProfileWallet from "../components/ProfileWallet";
import ProfileLogout from "../components/ProfileLogout";

const Profile = () => {
  return (
    <View>
      <ProfileHeader />
      <ProfileContent />
      <ProfileContent2 />
      <ProfileDue />
      <ProfileTotDue />
      {/* <ProfileWallet /> */}
      <ProfileLogout />
    </View>
  );
};

export default Profile;
