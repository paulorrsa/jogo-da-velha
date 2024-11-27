import React, { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [PlayerName, setPlayerName] = useState(name);
  const [isEditing, setEditing] = useState(false);

  function handerClick() {
    setEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, PlayerName);
    }
  }
  function newName(event) {
    setPlayerName(event.target.value);
  }

  let player = <span className="player-name">{PlayerName}</span>;
  let btnValue = "Edit";

  if (isEditing) {
    player = (
      <input type="text" required value={PlayerName} onChange={newName} />
    );
    btnValue = "Save";
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {player}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handerClick}>{btnValue}</button>
    </li>
  );
}
