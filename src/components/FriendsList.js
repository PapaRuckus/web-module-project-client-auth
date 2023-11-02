import React, { useState, useEffect } from "react";
import axios from "axios";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/friends")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>FriendsList</h2>
      <ul>
        <li>Name - age - email</li>
        <li>Name - age - email</li>
        <li>Name - age - email</li>
        <li>Name - age - email</li>
        <li>Name - age - email</li>
      </ul>
    </div>
  );
};

export default FriendsList;
