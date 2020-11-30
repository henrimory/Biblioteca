import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import DataLine from '../Components/DataLine';

function BookDetails({route}){
  const {person} = route.params;

  return(

    <View style={styles.container}>    
      {/* <Image source={{uri: person.picture.large}} style={styles.photo}/>   */}
      <DataLine label="Autor: " data={person.autor}/>            
      <DataLine label="Editora: " data={person.edição.editora}/>
      <DataLine label="Preço: " data={person.edição.preço}/>
      <DataLine label="Categoria: " data={person.edição.categoria}/>
      {/* <DataLine label="Tel: " data={person.phone}/>
      <DataLine label="Cel: " data={person.cell}/>
      <DataLine label="Nacionalidade: " data={person.nat}/> */}
    </View> 
  ); 


}

const styles = StyleSheet.create({
  photo:{
    aspectRatio: 1,
  },
  container:{
    padding: 10,

  }
 
});


export default BookDetails;