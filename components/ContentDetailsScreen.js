import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  View,
  Image,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ContentDetails = ({ navigation, route }) => {
  // const itemId = navigation.getParam("itemId");
  // console.log(itemId);

  const [state, setState] = useState({ data: {}, status: "Idle", error: null });

  useEffect(() => {
    console.log("UseEffect called");
    // getContentDetails();
  }, []);

  async function getContentDetails(props) {
    console.log("Inside Function:" + id);
    const body = {
      dataSource: "Cluster0",
      database: "articles",
      collection: "fs.files",
      filter: {
        author: "Sanaea C. Rose,Smadar Naoz,Re’em Sari,and Itai Linial",
      },
    };
    setState({ ...state, status: "loading" });
    await fetch(
      "https://data.mongodb-api.com/app/data-cijfe/endpoint/data/v1/action/findOne",
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

  // const renderItem = ({ item }) =>
  //   item.title !== "" ? (
  //     <View style={styles.item}>
  //       <Text style={styles.title}>{item.title}</Text>
  //     </View>
  //   ) : null;

  return (
    <SafeAreaView style={styles.container}>
      {/* <TouchableOpacity
      style={{marginLeft:20}}
      onPress={()=>{
        navigation.goBack()
      }
       }
      >
        <Image 
        source={require("../assets/images/back.png")}
        
        
        >

        </Image>
      </TouchableOpacity> */}
      {state.status === "loading" ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" />
        </View>
      ) : (
        // <View>
        //   <Text>{route.params?.itemId}</Text>
        // </View>
        <View style={{ flex: 1 }}>
          <View>
            <Image
              source={require("../assets/images/bookmark1.png")}
              resizeMode="contain"
              style={{
                height: 50,
                width: 50,
                position: "absolute",
                right: 20,
                top: -50,
              }}
            />
          </View>
          <ScrollView>
            <View style={{ marginHorizontal: 15 }}>
              <View
                style={{
                  flexDirection: "row",
                  padding: 10,
                  alignItems: "center",
                }}
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
                <View
                  style={{
                    marginLeft: 12,
                    wordWrap: "break-all",
                    width: "85%",
                  }}
                >
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
              <View>
                <Text style={styles.title}>{route.params?.itemHeading}</Text>
              </View>
              <View
                style={{
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../assets/images/ArticleContentImage.png")}
                  resizeMode="contain"
                  style={{ position: "relative", width: "92%" }}
                />
              </View>
              <View>
                <Text style={styles.text}>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur.
                </Text>
                <Text style={styles.text}>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur.
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
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
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    textAlign: "left",
    marginLeft: 12,
  },
  text: {
    fontSize: 20,
    textAlign: "justify",
    margin: 15,
  },
});

export default ContentDetails;
