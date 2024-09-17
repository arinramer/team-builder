import React, {useState, useEffect} from "react";

function Form(props) {

    const [user, setUser] = useState([{
        name: "",
        email: "",
        role: ""
      }]);

  useEffect(() => {
    setUser(props.edited);
  },[props.edited])

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const edit = event => {
    event.preventDefault();
    props.editMemberForRealThisTime(user);
    setUser({
      name: "",
      email: "",
      role: ""
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.addNewUser(user);
    setUser({
      name: "",
      email: "",
      role: ""
    })
  };

  return (
    <>
      <form onSubmit={event => props.editing ? edit(event) : handleSubmit(event)}>
        <label>
          Name:
          <input type="text" placeholder="Name" name="name" onChange={handleChange} value={user.name} />
        </label>
        <label>
          Email:
          <input type="text" placeholder="Email" name="email" onChange={handleChange} value={user.email} />
        </label>
        <label>
          Role:
          <input type="text" placeholder="Role" name="role" onChange={handleChange} value={user.role}/>
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}

export default Form;