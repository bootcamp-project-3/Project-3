import React from "react";
import SideBar from "../components/Nav/SideBar/SideBar";
import Styled from "styled-components";
import Image from "../components/LandingPage/assets/block_party.jpg";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Wrapper from "../components/LandingPage/Wrapper";
import { withStyles } from "@material-ui/core/styles";

const NavWrapperDiv = Styled.div`
  margin-bottom: 100px;
`;

const styles = {
        card: {
          minWidth: 275,
          width: "500px"
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
      };


const Background = Styled.main`
  background: url(${Image}) no-repeat center center fixed;
  background-size: cover;
  height: 100%;
  overflow: hidden;
`;

const AboutUs = (props) => {
        console.log(props);
        const {classes}=props;
        
              return(
                <Background>
                <NavWrapperDiv>
               <SideBar />
               </NavWrapperDiv>     
                 <Wrapper>
                <Card className={classes.card}>
                <CardContent>
          
          <h3>Our Project</h3>

          <p>
          Neighborly is a dynamic web application that encourages 
          relationships between neighbors. By geo-targeting local 
          and private communities, Neighborly provides an outlet to express 
          personal and familial needs such as shoveling a driveway, 
          getting a babysitter, getting your kids a ride to hockey practice, 
          finding orders for girl scout cookies, or even just 
          letting the neighborhood know you're having a pool party next week. 
          In the hectic world of today what we really need is to be Neighborly.
          </p>

          <h3>The Developers</h3>

          
             <p>Daniel Crump - Committed to the STACK, the FULL STACK, and nothing but the STACK (except the database side)</p>
             <br></br>
             <p>Matt Lawson - Digital marketer with an interest in front-end development.</p>
             <br></br>
             <p>Patrick Gould - Freelance Full Stack Web Developer from Boston, MA.</p>
             <br></br>
             Autsin Randolph
             <br></br>
             <p>Dinah Deshane - Enthusiastic, innovative operations specialist with a consistent record of increasing operational efficiency. Expanding
                technical proficiency to transition talents into web development.</p>
                    </CardContent>
          </Card> 
          </Wrapper>
          </Background>
        )  
}

export default withStyles(styles)(AboutUs);


// import React from "react";
// import SideBar from "../components/Nav/SideBar/SideBar";
// import BottomNav from "../components/Nav/BottomNav";
// import Styled from "styled-components";

// const NavWrapperDiv = Styled.div`
//   margin-bottom: 100px;
// `;

// const AboutUs = () => {
//     return (
//            <main>
//              <NavWrapperDiv>
//                <SideBar />
//              </NavWrapperDiv>
//       <div>
//           <h3>Our Project</h3>

//           <p>
//           Neighborly is a dynamic web application that encourages 
//           relationships between neighbors. By geo-targeting local 
//           and private communities, Neighborly provides an outlet to express 
//           personal and familial needs such as shoveling a driveway, 
//           getting a babysitter, getting your kids a ride to hockey practice, 
//           finding orders for girl scout cookies, or even just 
//           letting the neighborhood know you're having a pool party next week. 
//           In the hectic world of today what we really need is to be Neighborly.
//           </p>

//           <h3>The Developers</h3>

          
//              <p>Daniel Crump - Committed to the STACK, the FULL STACK, and nothing but the STACK (except the database side)</p>
//              <br></br>
//              <p>Matt Lawson - Digital marketer with an interest in front-end development.</p>
//              <br></br>
//              <p>Patrick Gould - Freelance Full Stack Web Developer from Boston, MA.</p>
//              <br></br>
//              Autsin Randolph
//              <br></br>
//              <p>Dinah Deshane - Enthusiastic, innovative operations specialist with a consistent record of increasing operational efficiency. Expanding
//                 technical proficiency to transition talents into web development.</p>

//           </div>
//           <BottomNav />
//       </main>
//     );
// //}

//export default AboutUs;