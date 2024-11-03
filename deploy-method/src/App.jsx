import { useState } from "react";
import solarLogo from "./assets/solar.svg";
import "./App.css";
import Heading from "./components/Heading";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [error, setError] = useState(null);

  const [count, setCount] = useState(0);

  // getAdvice function using method async await to fetch data
  async function getAdvice() {
    try {
      const response = await fetch(
        `https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`
      );
      {
        /* It seems that the API is not working properly, so I have to add a timestamp to the API and URL as parameter to avoid the cache busting */
      }
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data.slip.advice);
      setAdvice(data.slip.advice);
      {
        /* Nesting setCount inside getAdvice function, which means that the count is attached to onClick event {getAdvice}, too, and  will be updated directly after the advice is fetched and parsed. It will increase the {count} by 1 */
      }
      {
        /**
         *setCount(count + 1);
         * is commented out for a reason. It is not recommended to use the current state value to update the state.
         * Reason: Asynchronous nature of the setState function.
         * The state updates are batched and not guaranteed to be synchronous,
         * which results in the state not being updated correctly and unpredictably!
         * To avoid this, use the function form of the setState, which takes the previous state as an argument (below).
         */
      }
      setCount((prevCount) => prevCount + 1);

      setError(null);
    } catch (error) {
      setError("Failed to fetch advice. Please try again later.");
      setAdvice("");
    }

    {
      /** Next inserting the useEffect hook to fetch the data when the component mounts */
    }
    useEffect(function () {
      getAdvice();
    }, []);
  }

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img style={{ borderRadius: "50%" }} src={solarLogo} className="logo react" alt="Solar logo " />
        </a>
      </div>
      <Heading
        title="Deployment Method"
        text="Text here belong to the text prop(p) tag, without styling from the Heading component, which is imported from next door. That means the color you are seeing is the color from the App.css file."
      />
      {/** Adding the Heading component with the (h1)title prop set to "Deployment Method" */}
      <h3>Deployed with GitHub Pages</h3>
      <h2>V.1.</h2>
      <h3> getAdvice function using method async await to fetch data</h3>
      <p>
        The method uses async await to fetch data from the API. If the response
        is not ok, it will throw an error. If the response is ok, it will set
        the advice and error to null. If there is an error, it will set the
        error message and the advice to an empty string.
      </p>
      {/** Adding getAdvice function to the button. Also the error message inserted with ternary operator &&  (if error exists, then show the error message) */}
      <button onClick={getAdvice}>Try getting an advice of the day</button>{" "}
      <br />
      {error && <h4 style={{ color: "red" }}>{error}</h4>}
      <h4>{advice}</h4>
      {/** <p>You have read<strong>{count}</strong>pieces of advice </p>
       * The above line is replaced with the Msg (props) function below to as "method" make the code cleaner and more readable.
       */}
      <Msg count={count} />
      {/** Adding the counter function */}
      <h2>V.2</h2>
      <h3>Counter-Attached-above</h3>
    </>
  );
}

{
  /** Adding the Msg function to the App component
  it takes the count as a single argument (props) and returns a paragraph with the count value. You can also use the props.children to render the children of the component.
   */
}

function Msg(props) {
  return (
    <p>
      You have read <strong>{props.count}</strong> pieces of advice
    </p>
  );
}
