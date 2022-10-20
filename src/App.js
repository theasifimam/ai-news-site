import React, { useEffect } from 'react';
import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';

function App() {
  const alanKey = "8ef63f24480ddbd396a081ed04cb028b2e956eca572e1d8b807a3e2338fdd0dc/stage";

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if (command === "testCommand") {
          alert("This code was executed");
        }
      }
    })
  }, [])
  return (
    <div className="App" >
      <h1>Alan AI News Application</h1>

    </div>
  );
}

export default App;
