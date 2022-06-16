import React, {useContext} from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

export default function YoutubeView() {
  return (
    <WebView
      source={{
        uri: 'https://www.youtube.com/channel/UCUHNOO-fKfV_hZ-QXau1gAg',
      }}
      style={{marginTop: 20}}
    />
  );
}
