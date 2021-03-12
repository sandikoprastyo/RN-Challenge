import React from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import axios from 'axios';
 
const TodoList: React.FC = () => {
    const [todo, setTodo] = React.useState([]);

    const _getTodo = () =>{
     axios.get('https://6006a3a43698a80017de1b9c.mockapi.io/user/register/todo')
    .then((res)=>{
        console.log(res.data)
        setTodo(res.data)
    }).catch((err)=>{
        console.log(err.message)
        Alert.alert(err.message)
    })
    }

React.useEffect(()=> {
    _getTodo();
},[])


const _deleteTodo = (id: number) => {
  axios
    .delete(
      `https://6006a3a43698a80017de1b9c.mockapi.io/user/register/todo/${id}`,
    )
    .then((res) => {
    console.log(res.data)
    }).then(()=>{
    _getTodo();
    })
};

const _handleDelete = (id: number) => {
     Alert.alert(
       'DELETE',
       'Your sure to delete todo ?',
       [
         {
           text: 'Cancel',
           onPress: () => console.log('Cancel Pressed'),
           style: 'cancel',
         },
         { text: 'OK', onPress: () => _deleteTodo(id) },
       ],
       { cancelable: false },
     );
 
}
    return ( 
        <ScrollView>
            <View>
               {todo.map((todos, i)=>{
                   return (
                     <View key={i}>
                       <Text style={styles.todos}>{todos.name}</Text>
                       <View style={styles.action}>
                         <Text style={styles.edit}>Edit</Text>
                         <Text
                           style={styles.delete}
                           onPress={() => _handleDelete(todos.id)}
                         >
                           Delete
                         </Text>
                       </View>
                     </View>
                   );
               })}
            </View>
        </ScrollView>
     );
}
 
const styles = StyleSheet.create({
  action: {
    display: 'flex',
    flexDirection: 'row',
    padding: 30,
  },
  todos:{    
    fontSize: 20,
  },
  edit: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    color: 'white',
    backgroundColor: 'blue',
  },
  delete: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: 'white',
    borderRadius: 20,
    backgroundColor: 'red',
  },
});

export default TodoList;