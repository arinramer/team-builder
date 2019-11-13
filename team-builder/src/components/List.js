import React from 'react';

function List(props) {
  return (
    <div>
      {props.userList.map((user, index) => {
        return (
          <div key={index}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.role}</p>
          </div>
        );
      })}
    </div>
  );
}

export default List;
