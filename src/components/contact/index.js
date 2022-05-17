import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

const ContactInfo = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12" className="text-center">
          <h2>Contact Information</h2>
          <hr class="solid bg-dark" />
    
          <hr className="hr-light w-25" />
          <h3>Cell Phone</h3>
          <hr className="hr-dark w-25" />
          <a href="tel:201-874-4499">
            <MDBIcon icon="phone-alt" />201-874-4499
          </a>
          <hr className="hr-light w-25" />
          <h3>E-Mail</h3>
          <hr className="hr-dark w-25" />
          <a href="mailto:luca.everett@gmail.com">
            <MDBIcon icon="envelope" /> luca.everett11@gmail.com
          </a>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ContactInfo;