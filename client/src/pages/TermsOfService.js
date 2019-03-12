import React from "react";
import SideBar from "../components/Nav/SideBar/SideBar";
import Styled from "styled-components";

const NavWrapperDiv = Styled.div`
  margin-bottom: 100px;
`;

const TermsOfService = () => {
      return (
        <main>
        <NavWrapperDiv>
          <SideBar />
        </NavWrapperDiv>
        <div>
        <div>
        <h3>Terms and Conditions</h3>
        
        <p>Last updated: 3/1/2019</p>

        <p>Please read these Terms and Conditionsn carefully before using 
        the http://www.Neighborly.com website operated by Neighborly (us, we, or our).
        Your access to and use of the Neighborly is conditioned on your acceptance of and compliance with
        these Terms. These Terms apply to all visitors, users and others who access or use Neighborly.
        By accessing or using Neighborly you agree to be bound by these Terms. If you disagree
        with any part of the terms then you may not access Neighborly.</p>


        <h3>Content</h3>

        <p>Neighborly allows you to post, link, store, share and otherwise make available certain information,
        text, graphics, videos, or other material ("Content"). </p>

        <h3>Links To Other Web Sites</h3>

        <p>Neighborly may contain links to third-party web sites or services that are not owned or controlled
        by Neighborly. Neighborly has no control over, and assumes no responsibility for, the content,
        privacy policies, or practices of any third party web sites or services. You further acknowledge and
        agree that Neighborly shall not be responsible or liable, directly or indirectly, for any
        damage or loss caused or alleged to be caused by or in connection with use of or reliance on any
        such content, goods or services available on or through any such web sites or services.</p>

        <h3>Changes</h3>
        <p> We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
        revision is material we will try to provide at least 30 (change this) days' notice prior to any new terms
        taking effect. What constitutes a material change will be determined at our sole discretion.</p>

        <h3>Contact Us</h3>
        <p>If you have any questions about these Terms, please contact us.</p>

        <form action="#" onsubmit="if(document.getElementById('agree').checked) { return true; } else { alert('Please indicate that you have read and agree to the Terms and Conditions and Privacy Policy'); return false; }">


        <input type="checkbox" name="checkbox" value="check" id="agree" /> I have read and agree to the Terms and Conditions and Privacy Policy
        <br></br>
        <br></br>
        <input type="submit" name="submit" value="submit" />

        </form>


        </div>
        </div>
        </main>
        );
        }


export default TermsOfService; 
