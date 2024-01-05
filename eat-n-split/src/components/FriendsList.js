import React from "react";
import Friend from "./Friend";

export default function FriendsList({ friends, selectedFriend, onSelection }) {
  return (
    <ul>
      {friends.map((friend, i) => (
        <Friend
          friend={friend}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
          key={i}
        />
      ))}
    </ul>
  );
}
