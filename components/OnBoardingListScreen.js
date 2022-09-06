import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  View,
  ActivityIndicator,
  Image,
  Pressable,
} from "react-native";

const OnBoardingList = ({ navigation }) => {
  let numColumns = 2;
  const [state, setState] = useState({ data: {}, status: "Idle", error: null });

  //clean the state in the unmount to avoid warning: Can't perform a React state update on an unmounted component
  useEffect(() => {
    getOnboardingList();
    return () => {
      setState({});
    };
  }, []);

  async function getOnboardingList() {
    setState({ ...state, status: "loading" });
    await fetch("http://10.0.2.2:3000/recommended-articles")
      .then((resp) => resp.json())
      .then((responseJson) =>
        setState({
          data: responseJson,
          status: "resolved",
          error: null,
        })
      )
      .catch((error) => setState({ data: {}, status: "error", error: error }));
  }

  const renderItem = ({ item }) =>
    item.category !== "" ? (
      <View style={[styles.item]}>
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            color: "white",
            position: "absolute",
            textTransform: "capitalize",
            left: 45,
            fontSize: 20,
            zIndex: 999,
            top: 45,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {item.category}
        </Text>

        <Image
          style={styles.overlay}
          source={require("../assets/images/overlay.png")}
        />
        <Image
          style={styles.img}
          source={require("../assets/images/onboarding1.png")}
        />
      </View>
    ) : null;
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <Image
          style={styles.logo}
          source={require("../assets/images/interestLogo.png")}
        />
        <Text style={styles.heading}>Hit your Interests</Text>
      </View>

      {state.status === "loading" ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          numColumns={numColumns}
          contentContainerStyle={styles.list}
          data={state.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}

      <View style={styles.buttonView}>
        <Pressable
          style={styles.btn}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.doneBtn}>Done</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
    backgroundColor: "#ffffff",
  },
  // scrollView: {
  //   backgroundColor: "pink",
  //   marginHorizontal: 20,
  // },
  heading: {
    position: "absolute",
    fontSize: 30,
    color: "#1974D2",
    marginHorizontal: "20%",
    // left: 60,
    top: 55,
  },
  logo: {
    marginTop: 40,
    marginHorizontal: 20,
    paddingHorizontal: 20,
  },

  overlay: {
    position: "absolute",
    marginHorizontal: "3%",
    top: 45,
    zIndex: 2,
    width: "95%",
    height: 35,
    alignItems: "center",
    opacity: 0.8,
    justifyContent: "center",
  },

  // title: {
  //   position:'absolute',
  //   top:'100%',
  //   justifyContent: 'center',
  //   // width:'100%',
  //   fontSize: 20,
  //  color:'#fffff',

  // },
  list: {
    marginTop: "30%",
    marginHorizontal: 15,
  },
  img: {
    maxWidth: "100%",
    height: 140,
    zIndex: 1,
    // justifyContent:'center'
  },
  item: {
    flex: 1,
    margin: 10,
    //  flexDirection:'row',
    // flexWrap:'wrap',
  },
  title: {
    fontSize: 32,
  },
  btn: {
    textAlign: "center",
    width: 200,
    backgroundColor: "#0E39A9",
    paddingHorizontal: 30,
    paddingVertical: 18,
    marginBottom: 50,
    marginLeft: 105,
    marginTop: 30,
  },

  buttonView: {
    // position:'fixed'
    // justifyContent: "center",
    // alignItems: "center",
  },
  doneBtn: {
    fontSize: 20,
    // fontWeight: 400,
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff",
  },
});

export default OnBoardingList;
