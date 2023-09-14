import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

const QRScannerScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // data, taranan QR kodun içeriğini içerir
    alert(`QR Kod Okundu: ${data}`);

    // İşlem başarılı mı kontrol etmek için örnek bir koşul ekleyin
    if (data === "başarılı_kod") {
      navigation.navigate("TransactionStatusScreen");
    } else {
      navigation.navigate("ErrorScreen");
    }
  };

  if (hasPermission === null) {
    return <Text>İzinler bekleniyor....</Text>;
  }
  if (hasPermission === false) {
    return <Text>Kamera izni yok</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && (
        <Button
          title={"Tekrar Tara"}
          onPress={() => setScanned(false)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default QRScannerScreen;
