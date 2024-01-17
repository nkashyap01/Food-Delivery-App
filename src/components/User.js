import {useState} from "react";
const User = ({ name }) => {
    const [count] =useState(1);
  return (
    <div className="User-card">
    <h2> Count={count}</h2>
      <h2> Name:{name}</h2>
      <h3> Location:Bihar</h3>
      <h4> Contact:7004291827</h4>
    </div>
  );
};

export default User;
