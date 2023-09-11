// ErrorScreen.js

import React from "react";
import { View, Text, Button } from "react-native";

const ErrorScreen = ({ navigation }) => {
  const handleRetry = () => {
    // Tekrar Dene düğmesine basıldığında yapılacak işlemleri burada gerçekleştirin
    // ErrorScreen.js

import React from "react";
import { View, Text, Button } from "react-native";

const ErrorScreen = ({ navigation }) => {
  const handleRetry = () => {
    // Tekrar Dene düğmesine basıldığında yapılacak işlemleri burada gerçekleştirin
    // Örneğin, para gönderme işlemini yeniden denemek için gerekli kodu ekleyelim
  };

  const handleGoBack = () => {
    // AnaMenü Dön düğmesine basıldığında yapılacak işlemleri burada gerçekleştirelim
    
    navigation.navigate("HomePage"); 
  };

  return (
    <View>
      <Text>İşlem Başarısız!</Text>
      <Button title="Tekrar Dene" onPress={handleRetry} />
      <Button title="AnaMenüye Dön" onPress={handleGoBack} />
    </View>
  );
};

export default ErrorScreen;

  };

  const handleGoBack = () => {
    // AnaMenü Dön düğmesine basıldığında yapılacak işlemleri burada gerçekleştirin
    
    navigation.navigate("HomePage"); 
  };

  return (
    <View>
      <Text>İşlem Başarısız!</Text>
      <Button title="Tekrar Dene" onPress={handleRetry} />
      <Button title="AnaMenüye Dön" onPress={handleGoBack} />
    </View>
  );
};

export default ErrorScreen;
