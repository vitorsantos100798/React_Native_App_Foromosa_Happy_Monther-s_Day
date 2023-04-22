import React, {useState, useRef, useEffect} from 'react';
import {Image, ActivityIndicator, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
const App = () => {
  const qrcodeRef = useRef(null);
  const [link, setLink] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading && link) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [loading, link]);
  // eslint-disable-next-line react/no-unstable-nested-components
  const Camera = () => {
    return (
      <QRCodeScanner
        ref={qrcodeRef}
        onRead={({data}) => setLink(data)}
        flashMode={RNCamera.Constants.FlashMode.off}
        cameraStyle={{width: '100%', height: '100%'}}
      />
    );
  };

  // eslint-disable-next-line react/no-unstable-nested-components
  const CardMother = () => {
    return (
      <>
        {loading && link ? (
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ActivityIndicator size={40} color={'#FBB030'} />
          </View>
        ) : (
          <Image
            source={require('./assets/mae.jpg')}
            style={{width: '100%', height: '100%', resizeMode: 'cover'}}
          />
        )}
      </>
    );
  };

  return <>{link ? <CardMother /> : <Camera />}</>;
};

export default App;
