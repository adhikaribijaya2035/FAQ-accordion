import "./App.css";
import starimage from "./images/icon-star.svg";
import desktopbg from "./images/background-pattern-desktop.svg";
import mobilebg from "./images/background-pattern-mobile.svg";
import minusicon from "./images/icon-minus.svg";
import plusicon from "./images/icon-plus.svg";
import data from "./data";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState(null); // Track which accordion is open

  // Function to handle selection toggle
  function handleToggle(index) {
    setSelected(selected === index ? null : index); // Toggle between opening and closing an item
  }

  return (
    <div className="image">
      <img className="image" src={desktopbg} alt="background" />

      <div className="main-container">
        {/* The heading is now inside the itemWrapper, above the questions */}
        <div className="itemWrapper">
          <div className="heading">
            <img src={starimage} />
            <h1>FAQ</h1>
          </div>

          {data && data.length > 0 ? (
            data.map((dataItem, index) => (
              <div className="item" key={index}>
                <div className="title" onClick={() => handleToggle(index)}>
                  <h3 className="question">{dataItem.question}</h3>

                  {selected === index ? (
                    <img src={minusicon} alt="minus icon" />
                  ) : (
                    <img src={plusicon} alt="plus icon" />
                  )}
                </div>
                {selected === index && (
                  <div className="answer">{dataItem.answer}</div>
                )}
              </div>
            ))
          ) : (
            <div>No data found!</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
