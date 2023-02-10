import { default as React, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const Email = () => {
  const inputAccessoryViewID = "uniqueID";
  const [email, setEmail] = useState("");

  const onPressTitle = () => {
    setTitleText("Publier [pressed]");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>Email actuel</Text>
      <TextInput
        style={styles.input2}
        inputAccessoryViewID={inputAccessoryViewID}
        onChangeText={setEmail}
        value={email}
        placeholder={"email"}
      />

      <Text style={styles.baseText}>Email actuel</Text>
      <TextInput
        style={styles.input2}
        inputAccessoryViewID={inputAccessoryViewID}
        onChangeText={setEmail}
        value={email}
        placeholder={"email"}
      />

      <Text style={styles.baseText}>Confirmation du nouveau email</Text>
      <TextInput
        style={styles.input2}
        inputAccessoryViewID={inputAccessoryViewID}
        onChangeText={setEmail}
        value={email}
        placeholder={"email"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#e07b7b",
    justifyContent: "center",
  },
  top: {
    width: "90%",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 3,
    marginTop: 10,
    padding: Platform.OS == "ios" ? 16 : 8,
  },
  input2: {
    width: "70%",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 3,
    marginTop: 10,
    padding: Platform.OS == "ios" ? 16 : 8,
    marginRight: 20,
    marginLeft: 20,
  },
  textButton: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
  button: {
    width: "90%",
    padding: 15,
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#e07b7b",
    backgroundColor: "#676767",
    textAlign: "center",
  },
});

export default Email;
