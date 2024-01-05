import React from "react";
import Button from "./Button";

export default function Friend({ friend, onSelection, selectedFriend }) {
  return (
    <li>
      <img src={friend.image} alt="avatar" />
      <h3>{friend.name}</h3>
      {friend.balance === 0 ? (
        <p>{`You and ${friend.name} are even`}</p>
      ) : friend.balance > 0 ? (
        <p className="green">{`${friend.name} owes you ${friend.balance}€`}</p>
      ) : (
        <p className="red">{`You owe ${friend.name} ${
          friend.balance * -1
        }€`}</p>
      )}
      <Button onClick={() => onSelection(friend)}>
        {friend.name === selectedFriend?.name ? "Close" : "Select"}
      </Button>
    </li>
  );
}
