import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from 'react-native';

export default function App() {

  const itens = [
    { id: '1', nome: 'Protetor solar', emoji: '🧴' },
    { id: '2', nome: 'Toalha', emoji: '🏖️' },
    { id: '3', nome: 'Chinelo', emoji: '🩴' },
    { id: '4', nome: 'Óculos de sol', emoji: '😎' },
    { id: '5', nome: 'Garrafa de água', emoji: '💧' },
    { id: '6', nome: 'Chapéu ou boné', emoji: '👒' },
    { id: '7', nome: 'Roupa de banho', emoji: '👙' },
    { id: '8', nome: 'Guarda-sol', emoji: '⛱️' },
    { id: '9', nome: 'Lanche', emoji: '🍉' },
    { id: '10', nome: 'Bolsa de praia', emoji: '👜' },
  ];

  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
      }}
      style={styles.fundo}
      resizeMode="cover"
    >

      <View style={styles.overlay}>

        <SafeAreaView style={styles.container}>

          <View style={styles.cabecalho}>

            <Text style={styles.icone}>🌴</Text>

            <Text style={styles.titulo}>
              Lista para a Praia
            </Text>

            <Text style={styles.subtitulo}>
              Tudo o que você precisa levar!
            </Text>

          </View>

          <FlatList
            data={itens}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}

            renderItem={({ item }) => (
              <View style={styles.item}>

                <Text style={styles.emoji}>
                  {item.emoji}
                </Text>

                <Text style={styles.nome}>
                  {item.nome}
                </Text>

              </View>
            )}
          />

        </SafeAreaView>

      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  fundo: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 90, 120, 0.18)',
  },

  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  cabecalho: {
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 25,
  },

  icone: {
    fontSize: 45,
    marginBottom: 5,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',

    textShadowColor: 'rgba(0, 0, 0, 0.35)',
    textShadowOffset: {
      width: 1,
      height: 2,
    },
    textShadowRadius: 4,
  },

  subtitulo: {
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 6,
    textAlign: 'center',

    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 3,
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: 'rgba(255, 255, 255, 0.88)',

    paddingVertical: 15,
    paddingHorizontal: 18,

    marginBottom: 10,

    borderRadius: 15,
  },

  emoji: {
    fontSize: 25,
    marginRight: 15,
  },

  nome: {
    fontSize: 17,
    fontWeight: '600',
    color: '#155E75',
  },

});