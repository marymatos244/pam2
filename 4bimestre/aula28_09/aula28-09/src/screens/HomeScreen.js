import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>StudyFlow</Text>

      <Text style={styles.subtitle}>
        Organize seus estudos de forma simples e eficiente.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>📚 Meus Estudos</Text>

        <Text style={styles.cardText}>
          Organize suas matérias, tarefas e horários de estudo.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Studies')}
        >
          <Text style={styles.buttonText}>Ver meus estudos</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F1FF',
    alignItems: 'center',
    padding: 25,
    paddingTop: 60,
  },

  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#6C4AB6',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 35,
  },

  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 20,
    elevation: 4,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#6C4AB6',
    marginBottom: 12,
  },

  cardText: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#6C4AB6',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});