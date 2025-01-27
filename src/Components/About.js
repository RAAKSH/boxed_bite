import { User } from "./User";
// export const About = () => {
//   return (
//     <>
//       <User
//         name={"Raksha"}
//         location={"Bangalore"}
//         contact={"rakshac29@gmail.com"}
//       />
//     </>
//   );
// };
import React, { Component } from "react";
import UserF from "./UserF"

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  render() {
    return (
      <div>
        <User
          name={"Raksha"}
          location={"Bangalore"}
          contact={"rakshac29@gmail.com"}
        />
        <UserF />
      </div>
    );
  }
}

export default About;
