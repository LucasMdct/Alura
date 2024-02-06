import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
    container: {
        paddingVertical: 35,
        paddingHorizontal: 35,
        backgroundColor: '#222',
        display: 'flex',
        width: '100%',
        height: 220,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 8,
        flexShrink: 0,
    },
    image: {
        width: '100%',
        height: 220,
        
    },
    button: {
        marginTop: 28,
        width: 94,
        height: 32,
        flexShrink: 0,
        borderRadius: 12,
        backgroundColor: '#D82D2D'
      },
      textButton : {
        color: '#ffffff',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: 16,
      }

});

