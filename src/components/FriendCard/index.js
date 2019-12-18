import React from "react";
import "./style.css";

// function removeFriend(data) {
//   console.log(data);
// };

const FriendCard = props => (
  <div className="card"
    value={props.id}
    onClick={() => props.handleClick(props.id)}
  >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    {/* <span className="remove" onClick={() => props.removeFriend(props.id)}>𝘅</span>
    <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button> */}
  </div>
);

export default FriendCard;
