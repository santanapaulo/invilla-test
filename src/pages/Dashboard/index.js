import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';

export default function Dashboard() {
  const [myLocation, setMyLocation] = useState(null);
  const [loggedUser, setLoggedUser] = useState(null);

  async function fetchPlaces({ latitude, longitude }) {
    const data = await axios.get(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@${latitude}, ${longitude}&key=AIzaSyCCk8qkQeMd4RgeTqCDYn69ptLcqOCmDNI`,
    );

    // buscar dados, armazenar no state, e iterar no mapa (Markers)
  }

  async function getLoggedUser() {
    const data = await AsyncStorage.getItem('@invilla_user');
    setLoggedUser(JSON.parse(data));
  }

  useEffect(() => {
    const coords = null;
    Geolocation.getCurrentPosition(({ coords }) => {
      setMyLocation({ latitude: coords.latitude, longitude: coords.longitude });
      fetchPlaces({ latitude: coords.latitude, longitude: coords.longitude });
    });
    getLoggedUser();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          ...myLocation,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        loadingEnabled={true}
        toolbarEnabled={true}
        zoomControlEnabled={true}
        minZoomLevel={15}
      />
      {loggedUser && (
        <Image
          source={{ uri: loggedUser.photo }}
          style={styles.picture}></Image>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  picture: {
    borderRadius: 50,
    width: 80,
    height: 80,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 22,
    left: 22,
    right: 0,
    bottom: 0,
  },
});
