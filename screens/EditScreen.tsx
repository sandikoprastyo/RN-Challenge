import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';;

import { RootStackParamList } from '../types';


export default function EditScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'EditScreen'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Todo.</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Root')}
        style={styles.link}
      >
        <Text style={styles.linkText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
