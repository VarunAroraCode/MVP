import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        marginHorizontal: 3,
      },
      header: {
        color: 191970,
        textAlign: 'center',
        fontSize: 30,
      },
      description: {
        color: 'red',
        textAlign: 'left',
        fontSize: 23,
      },
      head: {
         height: 40,
          backgroundColor: '#f1f8ff'
     },
      text: {
         margin: 6 
      },
      title: {
        textAlign: 'center',
        marginVertical: 8,
      },
      scrollView: {
        backgroundColor: 'black',
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
        // width: 30,
        // backgroundColor: 'black',
      },
    });