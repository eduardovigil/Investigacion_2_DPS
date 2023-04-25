import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';



export default function Home() {
  const [videogames, setVideogames] = useState([]);

  const fetchVideogames = () => {
    fetch('https://api-videogames1d.000webhostapp.com/videogamesapi.json')
      .then(response => response.json())
      .then(gamelist => {
      setVideogames(gamelist.results); 
      console.log(gamelist);
      });
};

  useEffect(() => {
    fetchVideogames();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
      <Text style={styles.title}>Tienda de videojuegos de: {global.username}</Text> 
       <Text style={styles.tittle}></Text> 
        {videogames.map((videogame, index) => {
          return (
            <View key={index} style={styles.card}>
              <Image
                style={{width: 145, height: 190}}
                source={{
                  uri: videogame.image,
                }}
              />
              <View style={styles.textContainer}>
                <Text style={styles.name}>{videogame.name}</Text>
                <Text style={styles.info}>Año: {videogame.year}</Text>
                <Text style={styles.info}>Plataforma: {videogame.platform}</Text>
                <Text style={styles.info}>Precio: {videogame.price}</Text>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Comprar</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
    container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 30,
  },
    title: {
    alignItems: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
  card: {
    display: "flex",
    alignItems: "center",
    borderBottomColor: "black",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  textContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 5,
  },
  info: {
    textAlign: "center",
    marginBottom: 3,
    maxWidth: 180, 
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
