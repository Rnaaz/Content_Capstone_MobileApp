import {
  StyleSheet,
  Pressable,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
} from "react-native";
import React from "react";

const Separator = () => <View style={styles.separator} />;

const listTab = [
  {
    status: "Sign In",
  },
  {
    status: "Sign Up",
  },
];

const Login = ({ navigation }) => {
  const [email, onChangeEmail] = React.useState(null);
  const [userName, onChangeuserName] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
  const [status, setStatus] = React.useState("Sign In");

  const setStatusFilter = (status) => {
    setStatus(status);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upper}>
        <Image
          style={styles.logo}
          source={require("../assets/images/login_logo.png")}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              flex: 1.2,
              marginBottom: "-25%",
              height: 1.5,
              backgroundColor: "#1974D2",
            }}
          ></View>
          <View style={{ flex: 1 }}>
            <Text style={[styles.textFonts, { top: 50 }]}>
              {status === "Sign Up" ? "WELCOME" : "WELCOME BACK"}
            </Text>
          </View>
          <View
            style={{
              flex: 1.2,
              marginBottom: "-25%",
              height: 1.5,
              backgroundColor: "#1974D2",
            }}
          ></View>
        </View>
      </View>
      <View style={styles.listTab}>
        {listTab.map((tab, index) => (
          <TouchableOpacity
            style={[
              styles.btnTab,
              status === tab.status && styles.btnTabActive,
            ]}
            key={index}
            onPress={() => setStatusFilter(tab.status)}
          >
            <Text
              style={
                status === tab.status ? styles.textTabActive : styles.textTab
              }
            >
              {tab.status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.lower}>
        <View style={styles.inputView}>
          {status === "Sign Up" && (
            <TextInput
              style={styles.input}
              onChangeText={onChangeEmail}
              value={email}
              placeholder="Email Address"
              keyboardType="visible-password"
            />
          )}

          <TextInput
            style={styles.input}
            onChangeText={onChangeuserName}
            value={userName}
            placeholder="UserName"
            keyboardType="visible-password"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Password"
            // keyboardType="visible-password"
            secureTextEntry={true}
          />
          <Text
            style={[
              styles.textFonts,
              { top: -10, textAlign: "right", marginLeft: 210 },
            ]}
          >
            Forgot Password?
          </Text>
        </View>
        <View style={styles.buttonView}>
          <Pressable
            style={[styles.btn, status === "Sign In" && { marginBottom: -68 }]}
            onPress={() => {
              navigation.navigate("OnBoardingList");
            }}
          >
            <Text style={styles.signInBtn}>Sign In</Text>
          </Pressable>
        </View>
      </View>
      <Separator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // marginHorizontal: 16,
    backgroundColor: "#ffffff",
  },
  upper: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    top: 30,
  },
  logo: {
    // paddingBottom: 20,
  },
  lower: {
    flex: 5,
  },
  logo: {
    width: 280,
    height: 70,
  },
  separator: {
    //  marginVertical: 8,
    // borderBottomColor: "#737373",
    // borderBottomWidth: StyleSheet.hairlineWidth,
  },
  listTab: {
    flex: 1,
    paddingTop: 110,
    flexDirection: "row",
    marginLeft: 20,
  },
  btnTab: {
    width: Dimensions.get("window").width / 3.5,
    flexDirection: "row",
    // padding: 10,
    justifyContent: "center",
  },
  btnTabActive: {
    // borderBottomWidth: 1,
    // borderBottomColor:"#1974D2",
  },
  textTabActive: {
    color: "#1974D2",
    textDecorationLine: "underline",
    fontSize: 24,
  },
  textTab: {
    fontSize: 21,
    color: "#C4C4C4",
  },
  input: {
    borderBottomColor: "#1974D2",
    borderBottomWidth: 1,
    padding: 10,
    width: "80%",
    marginBottom: 20,
    fontSize: 18,
  },

  textFonts: {
    height: 18,
    width: 121,
    // top: 40,
    color: "#1974D2",
    fontWeight: "400",
    textAlign: "center",
  },
  inputView: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width: 200,
    backgroundColor: "#0E39A9",
    paddingHorizontal: 30,
    paddingVertical: 18,
  },
  buttonView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  signInBtn: {
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff",
  },
});

export default Login;
