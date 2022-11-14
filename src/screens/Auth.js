import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useAuth from "../contexts/AuthContext";

export default Auth = () => {

    const { signIn } = useAuth();

    return (
        <View style={styles.container}>
            <View
                style={{
                    backgroundColor: "blue",
                    borderRadius: 10,
                    paddingHorizontal: 10,
                    marginHorizontal: 5,
                }}
            >
                <Button
                    title="Continue with Google"
                   // color="white"
                    style={{ borderRadius: 10 }}
                    onPress={async () => await signIn()}
                ></Button>
            </View>

          
        </View>
    );

}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        flexDirection: "row",
    },
});