import React, { useState } from "react";
import Button from "./Button";

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [exp, setExp] = useState("");
  const paidByFriend = bill ? bill - exp : "";
  const [paying, setPaying] = useState("You");

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !exp) return;
    onSplitBill(paying === "You" ? paidByFriend : -exp);
  }

  return (
    <form className="form-split-bill" onSubmit={(e) => handleSubmit(e)}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🧍🏼‍♂️ Your expense</label>
      <input
        type="text"
        value={exp}
        onChange={(e) => setExp(Number(e.target.value))}
      />

      <label>🧍🏼‍♂️ {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label>🤑 Who is paying the bill </label>
      <select value={paying} onChange={(e) => setPaying(e.target.value)}>
        <option value="You">You</option>
        <option value="X">{selectedFriend.name}'s</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

export default FormSplitBill;
