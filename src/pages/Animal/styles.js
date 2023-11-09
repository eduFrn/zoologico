import { StyleSheet } from "react-native-web";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  animal: {
    width: '100%',
    height: 100,
    marginTop:10,
    marginBottom:10,
    flexDirection:'row',
  },
  imagemAnimal:{
    width:'30%',
    height:100,
    borderRadius:5,
    overflow:'hidden'
  },
  nomeAnimal: {
    position: 'absolute',
    top: (100/3),
    fontWeight: 'bold',
    textTransform:'uppercase',
    paddingLeft: 20,
    fontSize: 20,
    
  }
});