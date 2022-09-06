import React, { cloneElement, useEffect, useState } from "react";
import {
  Text,
  SafeAreaView,
  Pressable,
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";

const Profile = ({navigation}) => {
  const listTab = ["Public", "Unlisted"];
  const [list, setList] = React.useState("Public");

  const setListFilter = (list) => {
    setList(list);
  };

  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.btnView}>
          <Pressable
            style={styles.btnPressable}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={styles.signOutBtn}>Sign Out</Text>
          </Pressable>
        </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center",marginTop:-160 }}>
        <Image
          source={require("../assets/images/ProfilePagePicture.png")}
          resizeMode="contain"
          style={{
            borderRadius: 25,
            height: 100,
            width: 100,
          }}
        />
        <Text style={{ fontSize: 20, paddingTop: 8 }}>Full name</Text>
        <Text style={{ fontSize: 15 }}>And detailed information</Text>
      </View>
      <View style={{ flex: 2, justifyContent: "center", marginTop: -10 }}>
        <View style={styles.buttonView}>
          <Pressable style={styles.btn}>
            <Text style={styles.signInBtn}>Edit Profile</Text>
          </Pressable>
        </View>
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
        <View>
          <Text style={styles.title}>
            {
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            }
          </Text>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Image
              source={require("../assets/images/ProfileImage.png")}
              resizeMode="contain"
              style={{ width: "90%" }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#ffffff",
  },
  buttonView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -25,
  },
  signInBtn: {
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff",
  },
  btn: {
    width: 200,
    backgroundColor: "#0E39A9",
    paddingHorizontal: 30,
    paddingVertical: 18,
    borderRadius: 42,
    width: "90%",
    marginTop: -30,
  },
  listTab: {
    flexDirection: "row",
    marginTop: -30,
    marginBottom: 30,
    justifyContent: "center",
    alignContent: "center",
  },
  btnTab: {
    backgroundColor: "#ffffff",
    borderRadius: 42,
    marginLeft: 15,
    borderColor: "#1974D2",
    borderWidth: 1,
  },
  btnTabActive: {
    backgroundColor: "#1974D2",
  },
  textTabActive: {
    color: "#ffffff",
    fontSize: 21,
    borderRadius: 20,
    marginRight: 10,
    textAlign: "center",
    padding: 15,
    marginLeft: 5,
  },
  textTab: {
    fontSize: 18,
    color: "#1974D2",
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 20,
    textAlign: "left",
    marginBottom: 12,
    marginHorizontal: 20,
  },
  btnPressable: {
    width: 100,
    borderRadius:42,
    backgroundColor: "#1974D2",
    paddingVertical: 16,
  },
  btnView: {
    flex: 1,
    justifyContent: 'flex-start',
     alignItems: 'flex-end',
     marginRight:10
  },
  signOutBtn: {
    fontSize: 15,
    lineHeight: 15,
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff",
  },
});

export default Profile;
