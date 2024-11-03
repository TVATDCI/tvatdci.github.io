import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");
  const [error, setError] = useState(null);

  // getAdvice function using method async await to fetch data
  async function getAdvice() {
    try {
      const response = await fetch(`https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`);
      {/* It seems that the API is not working properly, so I have to add a timestamp to the API and URL as parameter to avoid the cache busting */ }
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data.slip.advice);
      setAdvice(data.slip.advice);
      setError(null);
    } catch (error) {
      setError("Failed to fetch advice. Please try again later.");
      setAdvice("");
    }
  }

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Deployment method</h1>
      <h3>Deployed with GitHub Pages</h3>
      <p> V.1</p>
      <h4>Let's deploy with some functions.</h4>

      {/* Adding getAdvice */}
      <button onClick={getAdvice}>Get advice</button> <br />
      {error && <h4 style={{ color: "red" }}>{error}</h4>}
      <h4>{advice}</h4>
    </>
  );
}

export default App;
