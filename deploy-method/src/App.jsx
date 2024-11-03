import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");
  const [error, setError] = useState(null);

  const [count, setCount] = useState(0);


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
      {/* Nesting setCount inside getAdvice function, which means that the count is attached to onClick event {getAdvice}, too, and  will be updated directly after the advice is fetched and parsed. It will increase the {count} by 1 */ }
      setCount(count + 1);
      {/* setCount((prevCount) => prevCount + 1); */ }

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

      <h2>V.1.</h2>
      <h3> getAdvice function using method async await to fetch data</h3>
      <p>The method uses async await to fetch data from the API. If the response is not ok, it will throw an error. If the response is ok, it will set the advice and error to null. If there is an error, it will set the error message and the advice to an empty string.</p>
      {/** Adding getAdvice function to the button. Also the error message inserted with ternary operator &&  (if error exists, then show the error message) */}
      <button onClick={getAdvice}>Try getting an advice of the day</button> <br />
      {error && <h4 style={{ color: "red" }}>{error}</h4>}
      <h4>{advice}</h4>

      {/** Adding the counter function */}
      <h2>V.2</h2>
      <h3>Counter</h3>
      <p>You have read <strong>{count}</strong> </p>
    </>
  );

}

export default App;
