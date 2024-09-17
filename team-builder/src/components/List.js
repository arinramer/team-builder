import React from 'react';

function List(props) {
  return (
    <div>
      {props.userList.map((user, index) => {
        return (
          <div key={index}>
            <p>{"Name: " + user.name}</p>
            <p>{"Email: " + user.email}</p>
            <p>{"Occupation: " + user.role}</p>
            <button onClick={() => {props.editMember(user); props.setKey(index)}}>Edit</button>
          </div>
        );
      })}
    </div>
  );
}

export default List;