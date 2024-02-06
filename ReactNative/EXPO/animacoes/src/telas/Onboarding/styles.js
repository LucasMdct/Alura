import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  logo: {
    position: "absolute",
    marginTop: 20,
    width: 130,
    height: 26,
    top: 20,
    left: 20,
  },
  carrosselArea: {
    height: 140,
    marginBottom: -30,
    paddingHorizontal: 20,
  },
controlImg: {
    width: 360,
    height: 290,
  },
  infoArea: {
    width: '100%',
    height: '100%',
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  titulo: {
    fontWeight: "700",
    fontFamily: "Arial",
    fontSize: 24,
    color: '#464646',
  },
  texto: {
    fontFamily: "Arial",
    fontSize: 16,
    color: '#A3A3A3',
    marginTop: 10,
  },
  botao: {
    height: 60,
    width: "100%",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#000',
    marginVertical: 10,
  },
  botaoTexto: {
    fontWeight: "700",
    fontFamily: "Arial",
    fontSize: 16,
    color: '#FFFFFF',
  }
});