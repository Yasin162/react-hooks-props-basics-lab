import React from "react";

import Links from "./links";

function About(props) {
  // let bio
  // <>
  //  if (props.bio == '') {
  //   return null}
  //  else if(props.bio == null) {
  //   return null}
  //  else {
  //  return  <p>{props.bio}</p> }
  //  </>
      return (
        <>
  <div id="about">
      <h2>About Me</h2>
    <div> { props.bio  ? <p>{props.bio}</p> : null } </div>
      {/* <p>{props.bio}</p> */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links 
      github = {props.github}
      linkedin = {props.linkedin}/>
      
    </div>
    </>
  );
 }

export default About;
