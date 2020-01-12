import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLOR} from '../../configs/consts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLOR.PURPLE,
  },
  appTitleContainer: {
    marginTop: 25,
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 40,
    letterSpacing: 8,
    color: COLOR.PINK,
  },
  appSubtitle: {
    fontSize: 18,
    color: COLOR.GRAY,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.appTitleContainer}>
        <Text style={styles.appTitle}>semart</Text>
        <Text style={styles.appSubtitle}>Where good basic needs delivered</Text>
      </View>
    </View>
  );
}

export default Login;
