import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { createRef } from 'react'

function App() {

  const nameRef = createRef()
  const jobRef = createRef()

  const dispatch = useDispatch()
  const data = useSelector(state => state)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: 'SAVE', data: { name: nameRef.current.value, job: jobRef.current.value } })

  }
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <label>Enter name <input ref={nameRef} /></label>
          <br />
          <label>Enter job <input ref={jobRef} /></label>
          <br />
          <button type="submit">Save</button>
        </form>
        <br/>
        <p>
          Form status {JSON.stringify(data)}
        </p>
      </header>
    </div>
  );
}

export default App;
