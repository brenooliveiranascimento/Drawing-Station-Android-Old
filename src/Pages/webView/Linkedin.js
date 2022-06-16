import React, {useContext} from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

export default function Linkedin() {
  return (
    <WebView
      source={{
        uri: 'https://www.linkedin.com/in/breno-nascimento-0b3331229/',
      }}
      style={{marginTop: 20}}
    />
  );
}
