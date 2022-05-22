import Container from "@mui/material/Container";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Definations from "./components/Definations/Definations";
import Header from "./components/Header";

function App() {
  const [word, setWord] = useState("");
  const [category, setCategory] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [label, setLabel] = useState("en");

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${label}/${word}`
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(meanings);
  useEffect(() => {
    dictionaryApi();
  }, [word, category]);

  return (
    <div
      className="App"
      style={{ height: "100vh", backgroundColor: "#282c34", color: "white" }}
    >
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
          label={label}
          setLabel={setLabel}
        />
        <Definations word={word} meanings={meanings} category={category} />
      </Container>
    </div>
  );
}

export default App;
