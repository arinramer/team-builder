import React, {useState} from "react";

function Form(props) {

    const [user, setUser] = useState({
        name: "",
        email: "",
        role: ""
      });

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.target.reset();
    event.preventDefault();
    props.addNewUser(user);
  };

  return (
    <>
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Name:
          <input type="text" placeholder="Name" name="name" onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="text" placeholder="Email" name="email" onChange={handleChange} />
        </label>
        <label>
          Role:
          <input type="text" placeholder="Role" name="role" onChange={handleChange} />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}

export default Form;