import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3001/users");
    // console.log(result);
    setUsers(result.data.reverse());
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`)
    loadUsers();
  }

  return (
    <div className="container py-4">
      <table class="table shadow">
        <thead class="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email ID</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        
            {
              users.map((user, index)=>
              (
                <tr>
                  <td scope="row" key={index}>{index+1}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link className="btn btn-primary mr-2" to={`/users/view/${user.id}`}>View</Link>
                    <Link className="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
                    <Link className="btn btn-danger" onClick={()=>deleteUser(user.id)}>Delete</Link>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};
export default Home;
