import * as React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';

export default function TabOneScreen() {
  const [text, setText] = React.useState("");


  const _handleOnChange = ({ value }: any) => {
   setText(value);
    Alert.alert(value);

  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='add todo here...'
          onChange={(value) => _handleOnChange(value)}
          value={text}
        />
        <TouchableOpacity style={styles.inputButton}>
          <Text
            style={{
              color: 'yellow',
              fontWeight: 'bold',
              paddingHorizontal: 15,
              paddingVertical: 14,
            }}
          >
            Add todo
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    padding: 10,
    marginTop: 50,
    width: '70%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1.5,
    borderRadius: 10,
    borderRightWidth: 0,
  },
  inputButton: {
    backgroundColor: 'black',
    color: 'yellow',
    top: 26,
    right: 20,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
});
