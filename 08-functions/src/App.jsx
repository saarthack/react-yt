import React from 'react'

const App = () => {
  function btnClicked(){
    console.log('hello');
  }
  return (
    <div>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App