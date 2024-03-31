import React, { useState } from "react";
import "./XSpellCheck.css";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

function XSpellCheck() {
  const [text, setText] = useState("");
  const [correction, setCorrection] = useState("");

  const handleTextChange = (event) => {
    const inputText = event.target.value;
    setText(inputText);
    checkSpelling(inputText);
  };

  const checkSpelling = (inputText) => {
    const words = inputText.toLowerCase().split(" ");
    let firstMisspelledWord = null;

    for (const word of words) {
      if (customDictionary[word]) {
        firstMisspelledWord = word;
        break;
      }
    }

    if (firstMisspelledWord) {
      const correctedWord = customDictionary[firstMisspelledWord];
      setCorrection(`Did you mean: ${correctedWord}?`);
    } else {
      setCorrection("");
    }
  };

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <div className="spellcheck-container">
        <textarea
          className="text-area"
          placeholder="Enter text..."
          value={text}
          onChange={handleTextChange}
        ></textarea>
        {correction && <p className="correction-msg">{correction}</p>}
      </div>
    </div>
  );
}

export default XSpellCheck;
