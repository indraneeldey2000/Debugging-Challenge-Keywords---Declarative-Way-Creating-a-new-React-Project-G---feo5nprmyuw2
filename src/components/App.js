import React, { useEffect, useState } from "react";
import '../styles/App.css';

const App = () => {

  let [count, setCount] = useState(0)
  const ondoubleclick = () => { alert("cant edit it") }
  const onclick=() => { setCount(count + 1) }

  return (
    <div className="ball">
      <h1 className="count">{count}</h1>
      <button className='increment-button' onDoubleClick=(() => ondoubleclick()) onClick={onclick}>Increment</button>
    </div>
  )
}


export default App;
