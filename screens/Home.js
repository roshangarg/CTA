import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  //   console.log(data);

  useEffect(() => {
    fetch("https://dummyjson.com/products", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => setData(json.products))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "900",
            backgroundColor: "blue",
            color: "white",
            padding: 10,
            fontSize: 15,
          }}
        >
          Home
        </Text>
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <View style={{ margin: 10 }}>
            <Text
              style={{
                marginHorizontal: 10,
                textAlign: "center",
                fontWeight: "900",

                padding: 10,
                fontSize: 25,
              }}
            >
              Product List{" "}
            </Text>

            <FlatList
              showsVerticalScrollIndicator={false}
              data={data}
              style={{ height: "85%" }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Details", { data: item })}
                  style={{
                    padding: 10,
                    backgroundColor: "grey",
                    margin: 5,
                    borderRadius: 5,
                    flexDirection: "row",
                  }}
                >
                  <Image
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 10,
                      marginRight: 10,
                    }}
                    source={{
                      uri: item.images[0],
                    }}
                  />
                  <View>
                    <Text style={{ color: "white", fontWeight: "900" }}>
                      {item.brand}{" "}
                    </Text>
                    <Text style={{ color: "white" }}>{item.category} </Text>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: "red",
  },
});
