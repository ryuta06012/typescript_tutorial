import axios from 'axios';
import { useState } from 'react';
import './App.css';
import { Todo } from './Todo';
import { TodoType } from './types/todo';
import { Text } from './Text';
import { UserProfile } from './UserProfile';
import { User } from './types/user';

const user: User = {
  name: "hryuuta",
 // hobbies: ["movie", "soccer", "cording"],
}

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickfetchData = () => {
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos").then((res) => {
         setTodos(res.data);
    });
  }
  return (
    <div className="App">
      <UserProfile user={user}/>
      <Text color="red" fontSize="18px"/>
      <button onClick={onClickfetchData}>Get Data</button>
      {todos.map((todo) => (
        <Todo 
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
          key={todo.id}
          />
      ))}
    </div>
  );
}
