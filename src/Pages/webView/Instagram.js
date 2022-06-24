import React from 'react';
import {WebView} from 'react-native-webview';

export default function Instagram() {
  return (
    <WebView
      source={{
        uri: 'https://www.instagram.com/allblack_arts/',
      }}
      style={{marginTop: 20}}
    />
  );
}
