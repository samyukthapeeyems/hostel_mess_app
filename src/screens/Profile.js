import { View, Text, TouchableOpacity , StyleSheet} from "react-native";
import MyStatusBar from "../components/MyStatusBar";
import { COLORS } from "../constants/theme";
import { CircleButton } from "../components/Button";

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>My Profile</Text>
    </View>
  );
};

const UserInfoCard = () => (
  <View
    style={{
      flexDirection: "row",
      paddingHorizontal: 16,
      paddingVertical: 30,
      backgroundColor: "white",
    }}
  >
    {/* left item  */}
    <View
      style={{
        flex: 1,
        flexDirection: "row",
      }}
    >
      <View
        style={{
          flex: 1,

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircleButton />
      </View>
      <View
        style={{
          flex: 3,
          backgroundColor: "white",
          paddingVertical: 13,
          paddingLeft: 10,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "700" }}>Anna</Text>
        <Text>anna@gmail.com</Text>
      </View>
    </View>
    {/* right item  */}
    <View
      style={{
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity>
        <Text style={{ fontWeight: "700", color: COLORS.blue, fontSize: 14 }}>
          EDIT PROFILE
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

const ProfileContent2 = () => {
  return (
    <View
      style={{ flexDirection: "row", padding: 10, backgroundColor: "#D7F4E7" }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "flex-start",
          justifyContent: "flex-start",
          marginLeft: 15,
        }}
      >
        <Text style={{ fontSize: 14, color: "#32BA7C" }}>
          Profile Incomplete
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "flex-end",
          justifyContent: "flex-end",
          marginRight: 15,
        }}
      >
        <Text style={{ fontSize: 14, color: "#32BA7C" }}>Complete now</Text>
      </View>
    </View>
  );
};

const ProfileWallet = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Wallet")}>
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          backgroundColor: "white",
          marginTop: 20,
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "flex-start",
            marginLeft: 15,
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>
            eCanteen Wallet
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-end",
            justifyContent: "flex-end",
            marginRight: 15,
          }}
        >
          <Text style={{ fontSize: 20 }}> > </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};


const ProfileLogout = () => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.red,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 15,
        marginHorizontal: 24,
        borderRadius: 10,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "700", color: "white" }}>
        LOG OUT
      </Text>
    </TouchableOpacity>
  );
};

const Profile = ({ navigation }) => {
  return (
    <>
      <MyStatusBar backgroundColor={COLORS.blue} barStyle="light-content" />
      <View style={{ flex: 9 }}>
        <ProfileHeader />
        {/* <ProfileHeader />
        <ProfileContent />
        <ProfileDue />
      <ProfileTotDue /> */}
        {/* <ProfileLogout /> */}
        <UserInfoCard />
        <ProfileContent2 />
        <ProfileWallet navigation={navigation} />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          marginBottom: 15,
        }}
      >
        <ProfileLogout />
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: { flexDirection: "row", backgroundColor: "#3358F9" },
  containerText: {
    fontWeight: "700",
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    paddingVertical: 21,
    paddingLeft: 16,
  },
});