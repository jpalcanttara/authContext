import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  ImageBackground,
  Platform,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useAuth } from "../../contexts/auth";
import { Feather as Icons } from "@expo/vector-icons";

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  function handleSignIn() {
    signIn();
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ImageBackground
        style={styles.container}
        imageStyle={{ width: "100%" }}
        source={require("../../assets/Background.png")}
      >
        <View style={styles.top}></View>
        <View style={styles.backDrop}>
          <View style={styles.centerButton}>
            <View style={styles.avatar}>
              <Icons name="user" size={40} color="#2D0C57" />
            </View>
          </View>
          <TextInput style={styles.inputStyle} placeholder={"Login"} />
          <TextInput style={styles.inputStyle} placeholder={"senha"} />
          <RectButton style={styles.centerButton} onPress={handleSignIn}>
            <Text style={styles.textForget}>Esqueci minha senha</Text>
          </RectButton>
          <View style={styles.footer}>
            <RectButton style={styles.button} onPress={handleSignIn}>
              <View style={styles.buttonIcon}>
                <Icons name="log-in" size={24} color="#fff" />
              </View>
              <Text style={styles.textButton}>Login</Text>
            </RectButton>
            <RectButton style={styles.buttonCreate} onPress={() => {}}>
              <Text style={styles.textButtonCreate}>Criar um conta</Text>
            </RectButton>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#A259FF",
  },
  top: {
    flex: 0.5,
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#0BCE83",
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    color: "#FFF",
    textTransform: "uppercase",
  },
  backDrop: {
    flex: 0.5,
    backgroundColor: "#F6F5F5",
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    padding: 20,
  },
  inputStyle: {
    backgroundColor: "#fff",
    minHeight: 48,
    marginVertical: 14,
    padding: 18,
    borderRadius: 8,
  },
  footer: {},
  buttonCreate: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  textButtonCreate: {
    color: "#A259FF",
  },
  textForget: {
    paddingBottom: 8,
    color: "#D9D0E3",
    textDecorationLine: "underline",
  },
  centerButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    flexDirection: "row",
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  buttonIcon: {
    marginRight: 8,
  },
});
