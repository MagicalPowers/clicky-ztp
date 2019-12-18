import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

// Inside of the `render` method, map over `this.state.friends` to render each `FriendCard` component. Refactor the `App` component so that rather than rendering each `FriendCard` component manually, use a map to render one `FriendCard` component for each object in the `friends` JSON, passing in the appropriate props.
//this might have to be a function
const hashCards = arr => {
  console.log(arr);
  arr.sort(() => Math.random() -1);
  return arr;
}

class App extends React.Component {
  state = {
    friends: friends
  }

  removeFriend = id => {
    const newFriends = this.state.friends.filter(data => data.id !== id); 
    // console.log('this is:', this);
    this.setState({ friends: newFriends });
  }

  
  
  render() {

    return (
      <Wrapper>
        <h1 className="title">Friends List</h1>
        {this.state.friends.map(data =>
        <FriendCard
          name={data.name}
          image={data.image}
          occupation={data.occupation}
          location={data.location}
          id={data.id}
          removeFriend={this.removeFriend}
        />)}
        {}
      </Wrapper>
    );
  }
}

export default App;
