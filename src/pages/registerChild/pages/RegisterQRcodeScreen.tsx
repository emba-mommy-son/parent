import React, { useState } from 'react';
import { Dimensions, Linking, View } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import FlashIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FlashOffIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Button from '@/components/buttons/Button';

interface ScanResult {
  type: string;
  data: string;
  rawData: string;
}

const RegisterQRcodeScreen = () => {
  const [scan, setScan] = useState(false);
  const [scanResult, setScanResult] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);
  const [onFlash, setOnFlash] = useState(false);

  const scanner = React.useRef('');

  const onSuccess = (e: any) => {
    const check = e.data.substring(0, 4);
    console.log('scanned data' + check);

    setResult(e);
    setScan(false);
    setScanResult(true);

    if (check === 'http') {
      Linking.openURL(e.data).catch(err => console.error('An error occured', err));
    } else {
      console.log('data', e.data);
      setResult(e);
      setScan(false);
      setScanResult(true);
    }
  };

  return (
    <View className="flex-1">
      <QRCodeScanner
        containerStyle={{ flex: 1 }}
        cameraStyle={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
        showMarker={true}
        customMarker={
          <View className="flex h-full w-full justify-center items-center">
            <View style={{ backgroundColor: 'rgba(82, 82, 82, 0.25)' }} className="h-1/4 w-full" />
            <View className="flex flex-row justify-center items-center w-full h-1/3">
              <View style={{ backgroundColor: 'rgba(82, 82, 82, 0.25)' }} className="h-full w-1/6" />
              <View style={{ backgroundColor: 'transparent' }} className="h-full w-4/6"></View>
              <View style={{ backgroundColor: 'rgba(82, 82, 82, 0.25)' }} className="h-full w-1/6" />
            </View>
            <View style={{ backgroundColor: 'rgba(82, 82, 82, 0.25)' }} className="h-1/2 w-full p-16 flex">
              <Button
                myButtonStyle="mb-2 bg-gray-300"
                type="secondary"
                myTextStyle="text-white"
                onPress={() => setOnFlash(!onFlash)}>
                {onFlash ? (
                  <FlashOffIcon name="flash-off" size={24} color="black" />
                ) : (
                  <FlashIcon name="flash" size={24} color="black" />
                )}
              </Button>
              <Button type="secondary" className="" myTextStyle="text-white">
                다시 촬영
              </Button>
            </View>
          </View>
        }
        ref={node => {
          if (node) {
            scanner.current = node as unknown as string;
          }
        }}
        onRead={onSuccess}
      />
    </View>
  );
};

export default RegisterQRcodeScreen;

// import React, { useEffect, useState } from 'react';
// import { Dimensions, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import QRCodeScanner from 'react-native-qrcode-scanner';

// const deviceWidth = Dimensions.get('screen').width;
// const deviceHeight = Dimensions.get('screen').height;

// interface ScanResult {
//   type: string;
//   data: string;
//   rawData: string;
// }

// const QRCodeScreen = () => {
//   const [scan, setScan] = useState(false);
//   const [scanResult, setScanResult] = useState(false);
//   const [result, setResult] = useState<ScanResult | null>(null); // 타입 지정

//   const scanner = React.useRef('');

//   const onSuccess = (e: any) => {
//     const check = e.data.substring(0, 4);
//     console.log('scanned data' + check);

//     setResult(e);
//     setScan(false);
//     setScanResult(true);

//     if (check === 'http') {
//       Linking.openURL(e.data).catch(err => console.error('An error occured', err));
//     } else {
//       setResult(e);
//       setScan(false);
//       setScanResult(true);
//     }
//   };

//   const activeQR = () => {
//     setScan(true);
//   };

//   const scanAgain = () => {
//     setScan(true);
//     setScanResult(false);
//   };

//   const desccription =
//     'QR code (abbreviated from Quick Response Code) is the trademark for a type of matrix barcode (or two-dimensional barcode) first designed in 1994 for the automotive industry in Japan. A barcode is a machine-readable optical label that contains information about the item to which it is attached. In practice, QR codes often contain data for a locator, identifier, or tracker that points to a website or application. A QR code uses four standardized encoding modes (numeric, alphanumeric, byte/binary, and kanji) to store data efficiently; extensions may also be used.';

//   useEffect(() => {}, []);

//   return (
//     <View style={styles.container}>
//       <View>
//         {/*<StatusBar barStyle="dark-content" />*/}
//         <Text style={styles.textTitle}>Welcome To React-Native QR Code Tutorial !</Text>
//         {!scan && !scanResult && (
//           <View style={styles.cardView}>
//             <Text numberOfLines={8} style={styles.descText}>
//               {desccription}
//             </Text>

//             <TouchableOpacity onPress={activeQR} style={styles.buttonTouchable}>
//               <Text style={styles.buttonTextStyle}>Click to Scan !</Text>
//             </TouchableOpacity>
//           </View>
//         )}

//         {scanResult && (
//           <>
//             <Text style={styles.textTitle1}>Result !</Text>
//             <View style={scanResult ? styles.scanCardView : styles.cardView}>
//               <Text>Type : {result?.type}</Text>
//               <Text>Result : {result?.data}</Text>
//               <Text numberOfLines={1}>RawData: {result?.rawData}</Text>
//               <TouchableOpacity onPress={scanAgain} style={styles.buttonTouchable}>
//                 <Text style={styles.buttonTextStyle}>Click to Scan again!</Text>
//               </TouchableOpacity>
//             </View>
//           </>
//         )}

//         {scan && (
//           <QRCodeScanner
//             reactivate={true}
//             showMarker={true}
//             ref={node => {
//               if (node) {
//                 scanner.current = node as unknown as string;
//               }
//             }}
//             onRead={onSuccess}
//             topContent={
//               <Text style={styles.centerText}>
//                 Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR
//                 code to test.
//               </Text>
//             }
//             bottomContent={
//               <View>
//                 <TouchableOpacity style={styles.buttonTouchable} onPress={() => (scanner.current as any)?.reactivate()}>
//                   <Text style={styles.buttonTextStyle}>OK. Got it!</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity style={styles.buttonTouchable} onPress={() => setScan(false)}>
//                   <Text style={styles.buttonTextStyle}>Stop Scan</Text>
//                 </TouchableOpacity>
//               </View>
//             }
//           />
//         )}
//       </View>
//     </View>
//   );
// };

// export default QRCodeScreen;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//     height: '100%',
//     width: '100%',
//   },

//   scrollViewStyle: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#99003d',
//   },

//   textTitle: {
//     fontWeight: 'bold',
//     fontSize: 18,
//     textAlign: 'center',
//     padding: 16,
//     color: 'white',
//   },
//   textTitle1: {
//     fontWeight: 'bold',
//     fontSize: 18,
//     textAlign: 'center',
//     padding: 16,
//     color: 'black',
//   },
//   cardView: {
//     width: deviceWidth - 32,
//     height: deviceHeight / 2,
//     alignSelf: 'center',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderRadius: 2,
//     borderColor: '#ddd',
//     borderBottomWidth: 0,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.8,
//     shadowRadius: 2,
//     elevation: 4,
//     marginLeft: 5,
//     marginRight: 5,
//     marginTop: 10,
//     backgroundColor: 'white',
//   },
//   scanCardView: {
//     width: deviceWidth - 32,
//     height: deviceHeight / 2,
//     alignSelf: 'center',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderRadius: 2,
//     borderColor: '#ddd',
//     borderBottomWidth: 0,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.8,
//     shadowRadius: 2,
//     elevation: 4,
//     marginLeft: 5,
//     marginRight: 5,
//     marginTop: 10,
//     backgroundColor: 'white',
//   },
//   buttonScan: {
//     width: 42,
//   },
//   descText: {
//     padding: 16,
//     textAlign: 'justify',
//     fontSize: 16,
//   },

//   highlight: {
//     fontWeight: '700',
//   },

//   centerText: {
//     flex: 1,
//     fontSize: 18,
//     padding: 32,
//     color: '#777',
//   },
//   textBold: {
//     fontWeight: '500',
//     color: '#000',
//   },
//   buttonTouchable: {
//     fontSize: 21,
//     backgroundColor: '#ff0066',
//     marginTop: 32,

//     width: deviceWidth - 62,
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 44,
//   },
//   buttonTextStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });
