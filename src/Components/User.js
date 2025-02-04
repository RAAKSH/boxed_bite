import React from "react";
import UserContext from "../Utils/UserContext";

export class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "xyz",
        location: "abc",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/RAAKSH");

    const dataJson = await data.json();
    this.setState({
      //userInfo: { name: dataJson?.name, location: dataJson?.location,githubUrl:dataJson?.html_url },
      userInfo: dataJson,
    });
  }

  render() {
    return (
      <div className="user-card">
        <img src={this.state?.userInfo?.avatar_url} className="user-img" />
        <div className="text">
          <h1>Name:{this.state?.userInfo?.name}</h1>
          <h3>Location:{this.state?.userInfo?.location}</h3>
          <h3>Contact: @Raksha</h3>
          <UserContext.Consumer>
            {({loggedInUser}) => <>{loggedInUser}</>}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}
