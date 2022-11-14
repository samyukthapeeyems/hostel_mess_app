import { Text, Button } from "react-native"
import RazorpayCheckout from 'react-native-razorpay';

export default Profile = () => {
    return (
        <Button
            title={'Pay with Razorpay'}
            onPress={() => {
              var options = {
                description: 'Credits towards consultation',
              //  image: 'https://i.imgur.com/3g7nmJC.png',
                currency: 'INR',
                key: 'rzp_test_63Ql0ORtf7nOeb', // Your api key
                amount: '5000',
                method : 'upi'
                // name: 'foo',
            
              };
              RazorpayCheckout.open(options)
                .then(data => {
                  // handle success
                  alert(`Success: ${data.razorpay_payment_id}`);
                })
                .catch(error => {
                  // handle failure
                  alert(`Error: ${error.code} | ${error.description}`);
                });
            }}
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



