import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form";
import List from "./components/List"

let isEditing = false;

function App() {
  const [users, setUsers] = useState([{ name: "John Smith", email: "john@yahoo.com", role: "Software Engineer" }]);
  const [memberToEdit, setMemberToEdit] = useState({ name: "", email: "", role: "" });
  const [key, setKey] = useState();

  const editMember = user => {
    setMemberToEdit(user);
    isEditing = true;
  }
  const addNewUser = user => {
    setUsers([...users, user])
  }
  const editMemberForRealThisTime = user => {
    setUsers([...users])
    users[key].name = user.name;
    users[key].email = user.email;
    users[key].role = user.role;
    isEditing = false;
  }
  return (
    <div className="App">
      <Form addNewUser={addNewUser} edited={memberToEdit} editing={isEditing} editMemberForRealThisTime={editMemberForRealThisTime}/>
      <List userList={users} editMember={editMember} editing={isEditing} setKey={setKey}/>
    </div>
  );
}

export default App;