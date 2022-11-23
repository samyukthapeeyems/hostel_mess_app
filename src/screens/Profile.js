import { Text, Button } from "react-native"
import AllInOneSDKManager from 'paytm_allinone_react-native';


export default Profile = () => {
  return (
    <Button
      title={'Pay with Razorpay'}
      onPress={() => {
        AllInOneSDKManager.startTransaction(
          orderId = "orderId",
          mid = "xZhVnv93110728543806",
          txnToken = "tranxToken",
          amount = "1000",
          callbackUrl = "https://securegw-stage.paytm.in/theia/paytmCallback?ORDER_ID=<order_id>",
          isStaging = false,
          appInvokeRestricted,
          urlScheme = "canteen://"
        )
          .then((result) => {
            console.log("result", result);
            // handle result ..
          })
          .catch((err) => {
            // handle error ..
          });
      }

      }
    />
  )
}
// import { View, Text } from "react-native";
// import ProfileHeader from "../components/ProfileHeader";
// import ProfileContent from "../components/ProfileContent";
// import ProfileContent2 from "../components/ProfileContent2";
// import ProfileDue from "../components/ProfileDue";
// import ProfileTotDue from "../components/ProfileTotDue";
// import ProfileWallet from "../components/ProfileWallet";
// import ProfileLogout from "../components/ProfileLogout";

// const Profile = () => {
//   return (
//     <View>
//       <ProfileHeader />
//       <ProfileContent />
//       <ProfileContent2 />
//       <ProfileDue />
//       <ProfileTotDue />
//       {/* <ProfileWallet /> */}
//       <ProfileLogout />
//     </View>
//   );
// };



