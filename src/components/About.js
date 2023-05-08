import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFun from "./Profile";
import React from "react"; 

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent - constructor");
  }

  componentDidMount() {
    //best place to make an api call in class based method
    console.log("Parent - componentDidMount");
  }

  render() {
    console.log("Parent - render");
    return (   
      <div>
        <h1>About Us PAge</h1>
        <p>This is the About page of our app</p>
        <Profile name={"First Child"} xyz="abc" />
        <Profile name = {"Second Child"} xyz="abc" />
        <Profile />
      </div>
    );
  }
}

export default About;
