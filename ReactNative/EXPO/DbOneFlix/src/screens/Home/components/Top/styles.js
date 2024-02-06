import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
    container: {
        paddingTop: 38,
        width: '100%',
        backgroundColor: '#222',
    },
    view: {
        paddingVertical: 0,
        paddingHorizontal: 74,
        width: 390,
        height: 86,
        flexShrink: 0,
        backgroundColor: '#1A1A1A',
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.25,
                shadowRadius: 4,
            },
            android: {
                elevation: 4,
            }, })
    }
});

