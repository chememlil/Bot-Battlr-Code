import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, removeBot }) {
  const botCards = bots.map((bot) => (
    <BotCard key={bot.id} bot={bot} botFunction={removeBot} />
  ));

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/* Render bot cards */}
          {botCards}
          {/* Display message if no bots are present */}
          {botCards.length === 0 ? <h1>Your Bots</h1> : null}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
