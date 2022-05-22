import Container from "@mui/material/Container";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Definitions from "./components/Definitions/Definitions";
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
      console.log("Please select your currency & Search a Word");
    }
  };
  console.log(meanings);
  useEffect(() => {
    dictionaryApi();
  }, [word, category]);

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        backgroundImage: `url("https://www.rd.com/wp-content/uploads/2017/10/This-Is-How-Long-It-Takes-To-Read-The-Whole-Dictionary_509582812-Billion-Photos_FT.jpg?resize=768,480")`,
        backgroundColor: "#282c34",
        color: "white",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
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
        {meanings && (
          <Definitions word={word} meanings={meanings} label={label} />
        )}
      </Container>
    </div>
  );
}

export default App;
