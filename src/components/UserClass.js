import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "neha",
        bio: "dummy",
        avatar_url: "dummy",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/nkashyap01");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  render() {
    const { name, bio, avatar_url } = this.state.userInfo;
    return (
      <div className="User-card">
        <img src={avatar_url}></img>
        <h2> Name:{name}</h2>
        <h3> Bio:{bio}</h3>
        <h4> Contact:7004291827</h4>
      </div>
    );
  }
}

export default UserClass;
