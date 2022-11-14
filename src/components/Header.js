import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SIZES } from "../constants/theme";
import { CircleButton } from "./Button";

const Header = ({ navigation }) => {
  const [timeOfDay, setTimeOfDay] = useState(0);

  let greeting = "";
  useEffect(() => {
    var hours = new Date().getHours(); //Current Hours
    setTimeOfDay(hours);
  }, []);
  if (timeOfDay < 12) greeting = "Morning";
  else if (timeOfDay > 12) greeting = "Afternoon";
  else if (timeOfDay > 18) greeting = "Evening";

  const [user, setUser] = useState("Anna");
  return (
    <View style={styles.container}>
      {/* left side text  */}
      <View style={styles.leftsideview}>
        <Text style={styles.leftsidetext1}>Good {greeting}</Text>
        <Text style={styles.leftsidetext2}>{user}</Text>
      </View>
      {/* profile icon  */}
      <View style={styles.profileiconview}>
        <CircleButton navigation={navigation} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: { flexDirection: "row", height: 75, backgroundColor: "#3358F9" },
  leftsideview: { flex: 1, marginLeft: 10, padding: 10 },
  leftsidetext1: { fontSize: SIZES.medium, color: "white", opacity: 0.5 },
  leftsidetext2: {
    fontSize: SIZES.large * 2,
    color: "white",
    fontWeight: "bold",
  },
  profileiconview: {
    flex: 1,
    alignItems: "space-between",
    justifyContent: "center",
    marginRight: 10,
  },
});
