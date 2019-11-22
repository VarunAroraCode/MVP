import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 3,
    backgroundColor: 'black',
  },
  header: {
    color: 191970,
    textAlign: 'center',
    fontSize: 30,
  },
  description: {
    color: 123123,
    textAlign: 'left',
    fontSize: 23,
    color : 'white',
  },
  head: {
     height: 40,
      backgroundColor: 'black',
 },
  text: {
     margin: 6 ,
     fontSize: 10,
     color: "white",
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    color: 'white',
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  dropDown: {
    backgroundColor: 'black',
    textAlign: 'center',
    width: 200,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  goBack : {
    width: 30,
    marginTop: 10,
  },
});

export default styles;