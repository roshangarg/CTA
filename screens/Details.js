import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import BackIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Details({ navigation }) {
  const route = useRoute();
  const item = route.params.data;
  return (
    <SafeAreaView>
      <View>
        <View
          style={{
            backgroundColor: "blue",

            padding: 10,
            flexDirection: "row",
          }}
        >
          <BackIcon
            onPress={() => navigation.navigate("Home")}
            name="keyboard-backspace"
            size={30}
            color="white"
          />
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 20,
              marginLeft: 100,
            }}
          >
            Details
          </Text>
        </View>
        <View style={styles.detailCard}>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{
                width: 100,
                height: 100,
                borderRadius: 10,
                marginRight: 10,
              }}
              source={{
                uri: item.images[0],
              }}
            />
            <View style={{ width: "100%" }}>
              <Text style={{ color: "white", fontWeight: "900", fontSize: 15 }}>
                {item.brand}{" "}
              </Text>
              <Text style={{ color: "white", maxWidth: "60%" }}>
                {item.description}{" "}
              </Text>
              <Text style={{ color: "white" }}>
                Rating : <Text style={{ color: "gold" }}> {item.rating}</Text>
              </Text>
            </View>
          </View>
        </View>

        <View style={{ marginHorizontal: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: "600" }}>
            Images in Stock
          </Text>
          <FlatList
            style={{
              margin: 10,

              alignContent: "center",
            }}
            data={item.images}
            renderItem={({ item }) => (
              <Image
                source={{ uri: item }}
                style={{
                  width: 90,
                  height: 90,
                  margin: 5,
                  borderRadius: 10,
                }}
              />
            )}
            keyExtractor={(item) => item}
            numColumns={3}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  detailCard: {
    justifyContent: "center",
    padding: 10,
    margin: 20,
    width: "90%",
    backgroundColor: "grey",
    borderRadius: 10,
  },
});
