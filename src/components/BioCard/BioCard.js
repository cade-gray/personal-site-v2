import React from "react";
import "./BioCard.css";
var bioText = require("./bioText.js");

export default function BioCard() {
  return (
    <div className="bioCard">
      <p className="bioText">{bioText.bioText}</p>
    </div>
  );
}
