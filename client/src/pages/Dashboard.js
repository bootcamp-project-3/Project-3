import React, { Component } from "react";
import SideBar from "../components/Nav/SideBar/SideBar";
import Styled from "styled-components";
import Card from "@material-ui/core/Card";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button"
import EditIcon from "@material-ui/icons/Edit"



const ContainerDiv = Styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 15px;
width: 50%;
margin: auto
`;

    
    class Dashboard extends Component {

      state = {
        name: "",
        id: "",
        location: "",
        nameDisabled: false,
        locationDisabled: true,
      }

        componentDidMount() {
        fetch("/api/session", {
            method: "Get", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "include", // include, *same-origin, omit
            headers: {
              "Content-Type": "application/json",
              // "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: "follow", // manual, *follow, error
            referrer: "client", // no-referrer, *client
          })
          .then(res =>res.json())
          .then(
              result => {
                console.log(result.data)
                this.setState({
                  id: result.data.user,
                  location: result.data.loc,
                  name: result.data.name,
                });
              },
              error => {
                console.log(error)
              }
          )
            }

            handleChange=event=>{
              const {name, value} = event.target;

              
              this.setState({
                [name]: value
              })
            }

            handleClick = name => {
              this.setState({
                [name]: !this.state[name],
              })
              console.log(this.state[name])
            }
        
    
    render() {

        return(
            <div>
            <SideBar />
            <ContainerDiv>
              <Card>
                <TextField
                value={this.state.name}
                 disabled={this.state.nameDisabled}
                 placeholder={this.state.name}>{this.state.name}
                 
                </TextField>
                <Button onClick={() => this.handleClick("nameDisabled")}>
                   <EditIcon />
                 </Button>
              </Card>
              <Card>
                <TextField
                 disabled={this.state.locationDisabled}
                 placeholder={this.state.location}
                 value={this.state.location}>
                </TextField> 
                <Button onClick={() => this.handleClick("locationDisabled")}>
                   <EditIcon />
                 </Button>
              </Card>
            </ContainerDiv>
            </div>
        )
    }
}

export default Dashboard;