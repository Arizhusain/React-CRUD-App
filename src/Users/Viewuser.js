import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";

const ViewUser = () => {


    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
      name: "",
      username: "",
      email: "",
      phone: "",
      website: "",
    });
    const { name, username, email, phone, website } = user;

  
    useEffect(()=>{
      loadUser();
    },[])
  
    const loadUser = async () => {
      const result = await axios.get(`http://localhost:3001/users/${id}`);
      setUser(result.data);
    };

  return (
    <div className= "container py 4">
        <h1>View User</h1>
      <ul class="list-group">
          
        <li class="list-group-item active" aria-current="true">
          User ID : {user.id}
        </li>
        <li class="list-group-item">Name     :{user.name}</li>
        <li class="list-group-item">Username :{user.username}</li>
        <li class="list-group-item">Email    : {user.email}</li>
        <li class="list-group-item">Phone    : {user.phone}</li>
        <li class="list-group-item">Website  : {user.website}</li>
      </ul><br/>
      <Link className="btn btn-success" to={'/'}>Back to Home</Link>
    </div>
  );
};

export default ViewUser;
