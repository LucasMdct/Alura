import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
    view: {
     display: 'flex',
     width: "100% auto",
     height: 48,
     flexDirection: 'column',
     justifyContent: 'center',
     flexShrink: 0,
     backgroundColor: '#222',
    },
    title: {
        color: '#2478DF',
        textAlign: 'center',
        fontFamily: 'BebasNeue',
        fontSize: 32,
        fontWeight: '400',
        fontStyle: 'normal',
      },
});

