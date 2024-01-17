import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
        count2: 1,
    };
  }
  render() {
    const {count,count2} = this.state;
    return (
      <div className="User-card">
        <h2>count= {this.state.count}</h2>
        <h2> count2= {count2}</h2>
        <h2> Name:{this.props.name}</h2>
        <h3> Location:Bihar</h3>
        <h4> Contact:7004291827</h4>
      </div>
    );
  }
}

export default UserClass;
