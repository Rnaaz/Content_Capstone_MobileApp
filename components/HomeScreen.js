import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  View,
  ActivityIndicator,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const DimensionsWindowWidth = Dimensions.get("window").width;

const Home = ({ navigation, route }) => {
  console.log("Article List ");

  const [state, setState] = useState({ data: {}, status: "Idle", error: null });
  const listTab = ["Trending Articles", "Politics", "Entertainment"];
  const [list, setList] = React.useState("Trending Articles");

  const setListFilter = (list) => {
    setList(list);
  };

  useEffect(() => {
    console.log("UseEffect called");
    getArticleList();
  }, []);

  async function getArticleList() {
    const body = {
      dataSource: "Cluster0",
      database: "articles",
      collection: "fs.files",
      projection: {
        _id: 1,
        filename: 3,
        author: 2,
        title: 4,
        Keywords: 5,
        chunkSize: 6,
        length: 7,
        uploadDate: 8,
      },
    };
    setState({ ...state, status: "loading" });
    await fetch(
      "https://data.mongodb-api.com/app/data-cijfe/endpoint/data/v1/action/find",
      {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Request-Headers": "*",
          "api-key":
            "zvvB0sCTMCMkkVTJ2hzJsxklizL0IJcp2pZ0yKmGk4AGGQfd3va03166ErC1miIU",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(body),
      }
    )
      .then((resp) => resp.json())
      .then((responseJson) =>
        setState({
          data: responseJson.documents,
          status: "resolved",
          error: null,
        })
      )
      .catch((error) => setState({ data: {}, status: "error", error: error }));
  }

  const renderItem = ({ item }) =>
    item.title !== "" ? (
      // <View style={styles.item}>
      //   <Text onPress={() => {
      //         navigation.navigate('ContentDetails',{
      //           itemId: item._id
      //         });
      //       }} style={styles.title}>{item.title}</Text>
      // </View>
      <TouchableOpacity
        style={styles.mainCardView}
        onPress={() => {
          navigation.navigate("ContentDetails", {
            itemId: item._id,
            itemHeading: item.title,
          });
        }}
      >
        <View
          style={{ flexDirection: "row", padding: 10, alignItems: "center" }}
        >
          <View>
            <Image
              source={require("../assets/images/ProfilePicture.png")}
              resizeMode="contain"
              style={{
                borderRadius: 25,
                height: 40,
                width: 40,
              }}
            />
          </View>
          <View style={{ marginLeft: 12, wordWrap: "wrap", width: "85%" }}>
            <Text
              style={{
                fontSize: 14,
                color: "black",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              {"Full Name | And detailed information"}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 50,
            width: "100%",
          }}
        >
          <View style={{ marginLeft: 25, wordWrap: "break-all", width: "70%" }}>
            <Text
              style={{
                fontSize: 14,
                color: "black",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              {item.title}
            </Text>
          </View>
          <View style={{ width: "30%" }}>
            <Image
              source={require("../assets/images/ArticleImage.png")}
              resizeMode="contain"
              style={{
                height: 70,
                width: 100,
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
    ) : null;

  return (
    <SafeAreaView style={styles.container}>
      {state.status === "loading" ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <>
          <View style={{ flex: 1 }}>
            <Image
              style={styles.logo}
              source={require("../assets/images/Home.png")}
            />
          </View>
          <ScrollView
            style={styles.scrollView}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.listTab}>
              {listTab.map((tab, index) => (
                <TouchableOpacity
                  style={[styles.btnTab, list === tab && styles.btnTabActive]}
                  key={index}
                  onPress={() => setListFilter(tab)}
                >
                  <Text
                    style={list === tab ? styles.textTabActive : styles.textTab}
                  >
                    {tab}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
          <FlatList
            contentContainerStyle={{
              flexGrow: 1,
              marginHorizontal: 20,
              justifyContent: "center",
            }}
            data={state.data}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#ffffff",
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
    marginVertical:100
  },
  text: {
    fontSize: 42,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 32,
  },
  mainCardView: {
    height: 160,
    backgroundColor: "white",
    shadowColor: "shadow",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    elevation: 8,
    justifyContent: "space-between",
  },
  textTabActive: {
    color: "#ffffff",
    fontSize: 21,
    borderRadius: 20,
    marginRight: 10,
    textAlign: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginLeft: 5,
  },
  textTab: {
    fontSize: 18,
    color: "#1974D2",
    textAlign: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
    alignItems: "center",
  },
  btnTabActive: {
    backgroundColor: "#1974D2",
  },
  listTab: {
    flexDirection: "row",
    marginTop: 100,
    marginLeft: 20,
    marginBottom: 30,
    marginRight: 20,
    // padding: 10,
    // width: DimensionsWindowWidth,
    // height: "100%"
  },
  btnTab: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderRadius: 42,
    marginRight: 10,
    borderColor: "#1974D2",
    borderWidth: 1,
  },
  logo: {
    marginTop: 10,
    marginHorizontal: 20,
    paddingHorizontal: 20,
  },
  scrollView: {
    // position: "absolute",
    width: "100%",
    height: "36%",
  },
});

export default Home;
