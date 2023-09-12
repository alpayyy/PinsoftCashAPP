import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // giriş işlemi gerçekleştirilir
    
  };

  const handleSignup = () => {
    // Kaydol düğmesinden yönlendirme işlemleri
    navigation.navigate("SignupScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Giriş Yap</Text>
      <TextInput
        style={styles.input}
        placeholder="E-posta"
        value={email}
        onChangeText={(enteredEmail) => setEmail(enteredEmail)}
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        secureTextEntry={true}
        value={password}
        onChangeText={(enteredPassword) => setPassword(enteredPassword)}
      />
      <Button title="Giriş Yap" onPress={handleLogin} />
      <Button title="Kaydol" onPress={handleSignup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default LoginScreen;
