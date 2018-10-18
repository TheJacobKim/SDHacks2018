import React from 'react';
import {
  Button,InputAccessoryView,TextInput,Alert,Image,Platform,ScrollView,
  StyleSheet,Text,TouchableOpacity,View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/trashcan.jpg')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>

            <Text style={styles.hellotext}>
              Let's get Trashy!
            </Text>
          </View>

        </ScrollView>

      </View>
    );
  }

}

const styles = StyleSheet.create({
 
  hellotext:{
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  

  
});
