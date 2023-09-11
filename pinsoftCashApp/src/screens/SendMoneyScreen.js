import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ErrorScreen from "./ErrorScreen"; // ErrorScreen bileşenini içe aktarın

const SendMoneyScreen = ({ navigation }) => {
  const [sentBalance, setSentBalance] = useState("");
  const [isTransactionSuccessful, setIsTransactionSuccessful] = useState(true); // İşlem başarısız olduğunda false olarak ayarlayın

  const handleSubmit = () => {
    // Para gönderme işlemini burada gerçekleştirin
    // İşlem başarısızsa setIsTransactionSuccessful(false) olarak ayarlayın
    // Ayrıca, işlem başarısız olduğunda ErrorScreen'e yönlendirin
    setIsTransactionSuccessful(false);
    navigation.navigate("HataEkranı"); // ErrorScreen'e yönlendirin
  };

  const handleQRCreate = () => {
    // QR Oluştur düğmesine basıldığında yapılacak işlemleri burada gerçekleştirin
    console.log("QR Kodu Oluşturuldu");
  };

  return (
    <View>
      <TextInput
        name="sent balance"
        placeholder="Gönderilecek Tutar"
        value={sentBalance}
        onChangeText={(enteredValue) => setSentBalance(enteredValue)}
      />
      <Button title="Gönder" onPress={handleSubmit} />
      <Button title="QR Oluştur" onPress={handleQRCreate} /> {/* QR Oluştur düğmesi */}
      
      {isTransactionSuccessful === false && <ErrorScreen navigation={navigation} />}
    </View>
  );
};

export default SendMoneyScreen;
