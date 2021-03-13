import * as React from 'react';
import TodoListProps from '../components/TodoList';
import {
  StyleSheet,
  RefreshControl,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import axios from 'axios';

const wait = (timeout: any) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

interface FooProp {
  name: string;
 date: string;
}


export default function TabOneScreen() {
  const [text, setText] = React.useState('');
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  const _handleSubmit = () => {
    axios
      .post('https://6006a3a43698a80017de1b9c.mockapi.io/user/register/todo/', {
        name: text,
        date: new Date()
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  const _handleonChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ): void => {
    const value = e.nativeEvent.text;
    setText(value);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='add todo here...'
          onChange={_handleonChange}
        />
        <TouchableOpacity style={styles.inputButton} onPress={_handleSubmit}>
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
      <View style={styles.listTodo}>
        <TodoListProps />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  listTodo: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    fontSize: 20,
    borderColor: 'gray',
    borderWidth: 1.5,
    borderRadius: 15,
    borderRightWidth: 0,
  },
  inputButton: {
    backgroundColor: 'black',
    color: 'yellow',
    top: 26,
    right: 20,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
  },
});
