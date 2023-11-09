import { StyleSheet } from "react-native-web";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  territorio: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    marginTop:10,
    marginBottom:10,
    justifyContent:'center'
  },
  textoTerritorio: {
    position: 'absolute',
    top: (100/3),
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 40,
    fontSize: 24
  }
});