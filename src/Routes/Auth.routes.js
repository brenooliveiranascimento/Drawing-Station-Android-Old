import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Auth from '../Pages/Auth';
import Linkedin from '../Pages/webView/Linkedin';
import YoutubeView from '../Pages/webView/Youtube';
import Instagram from '../Pages/webView/Instagram';

export default function AuthRoutes() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Auth"
        component={Auth}
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="linkedAuth"
        component={Linkedin}
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="youtubeAuth"
        component={YoutubeView}
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="instagramAuth"
        component={Instagram}
      />

    </Stack.Navigator>
  );
}
