import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const AboutMe = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
          <h2>About Me</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "285px" }}
            src="./assets/me.jpeg"
            class="float-left pr-4 pb-3 img-fluid"
            alt="Luca Urbanowicz"
          />
          <p style={{ fontSize: "27px" }}>
           Hi! My name is Luca Urbanowicz and I am currently enrolled in a Full Stack Web Developer program at the University of Denver.
          </p>
          <p style={{ fontSize: "27px" }}>
            In being a pediatric nurse for over the past 8 years, I am very detail focused and an ambitious problem solver. 
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutMe;