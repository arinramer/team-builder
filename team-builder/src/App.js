import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form";
import List from "./components/List"

function App() {
  const [users, setUsers] = useState([{ name: "", email: "", role: "" }]);
  const addNewUser = user => {
    setUsers([...users, user])
  }
  return (
    <div className="App">
      <Form addNewUser={addNewUser}/>
      <List userList={users}/>
    </div>
  );
}

export default App;
