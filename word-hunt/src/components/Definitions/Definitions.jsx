import React from "react";
import "./Definitions.css";

function Definitions({ word, label, meanings }) {
  return (
    <div className={`${word ? "meanings" : ""}`}>
      {meanings[0] && word && label === "en" && (
        <audio
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          style={{ backgroundColor: "#fff", borderRadius: 10 }}
          controls
        >
          Your Browser does not support audio element
        </audio>
      )}

      {word === "" ? (
        <span className="subTitle">Start by typing a word in Search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMeaning"
                style={{ backgroundColor: "white", color: "black" }}

              >
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: "black", width: "100%" }}></hr>
                {def.example && (
                  <span>
                    <b>Example : </b>
                    {def.example}
                  </span>
                )}
                <br />
                {def.synonyms.length !== 0 && (
                  <span>
                    <b>Synonyms : </b>
                    {def.synonyms.map((s) => `${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
}

export default Definitions;
