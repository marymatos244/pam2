import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function AddStudyScreen({ navigation }) {

  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');

  function addStudy() {

    if (subject.trim() === '' || content.trim() === '') {
      Alert.alert(
        'Atenção',
        'Preencha a matéria e o conteúdo do estudo.'
      );
      return;
    }

    Alert.alert(
      'Estudo adicionado!',
      `Matéria: ${subject}\nConteúdo: ${content}`,
      [
        {
          text: 'OK',
          onPress: () => navigation.goBack(),
        },
      ]
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Novo Estudo
      </Text>

      <Text style={styles.subtitle}>
        Cadastre uma matéria para organizar seus estudos.
      </Text>

      <Text style={styles.label}>
        Matéria
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: Matemática"
        placeholderTextColor="#999"
        value={subject}
        onChangeText={setSubject}
      />

      <Text style={styles.label}>
        Conteúdo
      </Text>

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Ex: Equação do 2º grau"
        placeholderTextColor="#999"
        value={content}
        onChangeText={setContent}
        multiline
      />

      <TouchableOpacity
        style={styles.button}
        onPress={addStudy}
      >
        <Text style={styles.buttonText}>
          Adicionar estudo
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F1FF',
    padding: 25,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#6C4AB6',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    color: '#666',
    marginBottom: 30,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6C4AB6',
    marginBottom: 8,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D8CCED',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    marginBottom: 20,
  },

  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },

  button: {
    backgroundColor: '#6C4AB6',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});