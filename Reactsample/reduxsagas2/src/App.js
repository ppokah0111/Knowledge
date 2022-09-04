import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {createRef} from 'react';
import Table from './Table';

function App() {
  
  const todoIdRef = createRef()
  const dispatch = useDispatch()
  const data = useSelector(state => state)

  const handleClick = () => {
    dispatch({type: 'FETCH_TODOS'})
  }

  const handleFetchByIdClick = () => {
    dispatch({type: 'FETCH_TODO_BY_ID', todoId:todoIdRef.current.value})
  }

  return (

    <div className="App">
      <header className="App-header">
        <label> Enter id to fetch
          <input type="number" ref={todoIdRef} />
        </label>

        <button onClick={handleFetchByIdClick}> Fetch By Id </button>
        <button onClick={handleClick}> Fetch All </button>
        <br/>
        <Table data={data.todos} columns={data.columns}/> 
        <br />
        {JSON.stringify(data)}
      </header>
    </div>
  );
}

export default App;
