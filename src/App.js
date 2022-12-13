import "./App.css";
import axios from "axios";
import Leaders from "./components/leaders";
import { useEffect, useState } from "react";

const API_URL = "http://localhost:3000/api/v1/leaders";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data);
}

function App() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setLeaders(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
      <Leaders leaders={leaders} />
    </div>
  );
}

export default App;