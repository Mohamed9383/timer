import React from 'react';
import Dt from "./components/date.js";
import './App.css';
const date = [
  {tm:111222, }
]
function App() {

  return (
    <div className="App">
     <Dt tt={date} />
    </div>
  );
}

export default App;
