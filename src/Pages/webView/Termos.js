import React from 'react';
import {WebView} from 'react-native-webview';

export default function Termos() {
  return (
      <WebView
      source={{
        uri: 'https://brenooliveiranascimento.github.io/',
      }}
      style={{marginTop: 20}}
    />
  );
}
