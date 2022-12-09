import { StyleSheet, View, Text } from "react-native"

const foodEmoji = [
    {
        emoji: "🍔",
        color: "#D7CEB2"
    },
    {
        emoji: "🍟",
        color: "#FFF2F1"
    },
    {
        emoji: "🍕",
        color: "#FFFBBD"
    },
    {
        emoji: "🥪",
        color: "#F4CAE0"
    },
    {
        emoji: "🌮",
        color: "#C1DFF0"
    },
    {
        emoji: "🍛",
        color: "#FFEEDD"
    }
]

export default function EmojiPlaceHolder({list = foodEmoji}) {
    let random = Math.floor(Math.random() * list.length);
    return (
        <View style={{ ...styles.container, backgroundColor: list[random].color }}>
            <Text style={styles.text}>{list[random].emoji}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "yellow",
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        borderRadius: 100,
        margin: 5
    },
    text: {
        fontSize: 30
    }
})