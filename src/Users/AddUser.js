import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
const AddUser = () => {
    let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const { name, username, email, phone, website } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) =>{
      e.preventDefault();
      await axios.post("http://localhost:3001/users/", user);
      history.push("/");
  }

  return (
    <div className="container py-2 border shadow">
      <h1 className="text-center md-4">Add User</h1>
      <form onSubmit={e=> onSubmit(e)}>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Enter Your Full Name"
            name="name"
            value={name}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Enter Your Username"
            name="username"
            value={username}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div class="mb-3">
          <input
            type="email"
            class="form-control"
            placeholder="Enter Your Email ID"
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Enter Your Phone Number"
            name="phone"
            value={phone}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Enter Your Website Name"
            name="website"
            value={website}
            onChange={(e) => onInputChange(e)}
          />
        </div>

        <div class="d-grid gap-2">
          <button class="btn btn-primary">
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
