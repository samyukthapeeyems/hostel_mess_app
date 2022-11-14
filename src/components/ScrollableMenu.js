import {
  StyleSheet,
  Text,
  View,
  SectionList,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../constants/theme";
import porotta from "../assets/images/porotta.png";
import chappathi from "../assets/images/chappathi.png";
import dosa from "../assets/images/dosa.png";
import { GreenButton } from "../assets/icons";
import ItemCounter from "./ItemCounter";
import { useState } from "react";

const DATA = [
  {
    title: "✨Recommended",
    data: [
      {
        id: 1,
        foodItem: "Pizza",
        details: "2 Piece Porotta, 1 Portion of ...",
        cost: 30,
        img: porotta,
      },
      {
        id: 2,
        foodItem: "Burger",
        details: "2 Piece Porotta, 1 Portion of ...",
        cost: 70,
        img: chappathi,
      },
      {
        id: 3,
        foodItem: "Risotto",
        details: "2 Piece Porotta, 1 Portion of ...",
        cost: 90,
        img: dosa,
      },
    ],
  },
  {
    title: "Sides",
    data: [
      {
        id: 4,
        foodItem: "French Fries",
        details: "2 Piece Porotta, 1 Portion of ...",
        cost: 20,
        img: porotta,
      },
      {
        id: 5,
        foodItem: "Onion rings",
        details: "2 Piece Porotta, 1 Portion of ...",
        cost: 70,
        img: chappathi,
      },
      {
        id: 6,
        foodItem: "Fried Shrimps",
        details: "2 Piece Porotta, 1 Portion of ...",
        cost: 60,
        img: dosa,
      },
    ],
  },
  {
    title: "Drinks",
    data: [
      {
        id: 7,
        foodItem: "Water",
        details: "2 Piece Porotta, 1 Portion of ...",
        cost: 30,
        img: dosa,
      },
      {
        id: 8,
        foodItem: "Coke",
        details: "2 Piece Porotta, 1 Portion of ...",
        cost: 30,
        img: chappathi,
      },
      {
        id: 9,
        foodItem: "Beer",
        details: "2 Piece Porotta, 1 Portion of ...",
        cost: 30,
        img: porotta,
      },
    ],
  },
  {
    title: "Desserts",
    data: [
      {
        id: 10,
        foodItem: "Cheese Cake",
        details: "2 Piece Porotta, 1 Portion of ...",
        cost: 25,
        img: porotta,
      },
      {
        id: 11,
        foodItem: "Ice cream",
        details: "2 Piece Porotta, 1 Portion of ...",
        cost: 20,
        img: dosa,
      },
    ],
  },
];

const MenuItem = ({ item }) => {
  const [items, setItems] = useState(2);
  const [count, setCount] = useState(0);
  const handleAddItems = () => {
    setCount((count) => count + 1);
  };
  const handleRemoveItems = () => {
    setCount((count) => count - 1);
  };

  return (
    <View
      style={{
        marginVertical: 4,
        paddingLeft: 10,
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {/* left item  */}
      <View
        style={{
          padding: 10,
          justifyContent: "center",
          // backgroundColor: COLORS.yellow,
          flexWrap: "wrap",
        }}
      >
        <Image
          source={item.img}
          resizeMode="contain"
          style={{ borderRadius: 10 }}
        />
      </View>
      {/* center item  */}
      <View
        style={{
          flex: 2,
          // backgroundColor: "cyan",
          flexDirection: "column",
          paddingVertical: 10,
          paddingHorizontal: 10,
          flexWrap: "wrap",
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "700" }}>{item.foodItem}</Text>

        <Text style={{ fontSize: 12, fontWeight: "400", marginBottom: 4 }}>
          {item.details}
        </Text>

        <Text
          style={{
            fontSize: 24,
            fontWeight: "700",
            color: COLORS.green,
          }}
        >
          ₹{item.cost}
        </Text>
      </View>
      {/* right item  */}
      <View
        style={{
          flex: 1,
          // backgroundColor: "pink",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {count === 0 ? (
          <TouchableOpacity onPress={handleAddItems}>
            <GreenButton />
          </TouchableOpacity>
        ) : (
          <ItemCounter
            count={count}
            handleAddItems={handleAddItems}
            handleRemoveItems={handleRemoveItems}
          />
        )}
      </View>
    </View>
  );
};
const SearchBar = () => {
  return (
    <View style={styles.conatiner}>
      <TextInput
        placeholder="🔍 Porotta, Dosa ..."
        style={styles.textinput}
        placeholderTextColor="#3C3C4399"
      />
    </View>
  );
};

const SectionListHeader = () => (
  <View style={{ backgroundColor: COLORS.white }}>
    <SearchBar />
    <Text style={styles.listTitle}>Order Your Food 🍛</Text>
  </View>
);
const MenuCardTitle = ({ section: { title } }) => (
  <View style={styles.menuCardTitleContainer}>
    <View style={{ flex: 3, paddingLeft: 8 }}>
      <Text style={styles.menuCardText}>{title}</Text>
    </View>
  </View>
);
const ScrollableMenu = () => (
  <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 15 }}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <MenuItem item={item} />}
      renderSectionHeader={MenuCardTitle}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={SectionListHeader}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  listTitle: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 10,
  },
  menuCardTitleContainer: {
    flexDirection: "row",
    backgroundColor: COLORS.white,
  },
  menuCardText: {
    fontSize: 20,
    fontWeight: "700",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 4,
  },
  sectionHeader: {
    fontSize: 32,
    // backgroundColor: "white",
    // paddingTop: 10,
    padding: 7,
  },
  title: {
    fontSize: 24,
  },
  conatiner: { width: "100%" },
  textinput: {
    fontSize: 18,
    backgroundColor: "#7676801F",
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginVertical: 15,
    borderRadius: 10,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});

export default ScrollableMenu;
