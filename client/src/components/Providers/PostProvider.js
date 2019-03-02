import React, { Component } from "react";

const PostContext = React.createContext({});

class PostProvider extends Component {
  state = {
    name: "Harry",
    age: "",
    email: "",
  };

  render() {
    return(
      <PostContext.Provider value={{
        state: this.state
      }}>
        {this.props.children}
      </PostContext.Provider>
    )
  }
}

export default PostProvider;
