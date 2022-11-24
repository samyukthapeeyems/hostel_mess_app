/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import messaging from '@react-native-firebase/messaging';
import { AuthProvider } from './src/contexts/AuthContext';
import notifee from '@notifee/react-native';
import React from 'react';

function onMessageReceived(message) {
  const { title, body } = message.data;
  console.log(message);
  // notifee.displayNotification({
  //     title: "title",
  //     body: "body",
  //     android: {
  //         channelId: 'reminder',
  //     },
  // });
}

messaging().setBackgroundMessageHandler(onMessageReceived);

const InitializeApp = async () => {
  // Register the device with FCM
  await messaging().registerDeviceForRemoteMessages();

  // Get the token
  const token = await messaging().getToken();
  console.log(token);
};

const Init = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

InitializeApp();

AppRegistry.registerComponent(appName, () => Init);
