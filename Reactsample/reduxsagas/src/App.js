import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import Table from './Table';

function App() {
  const dispatch = useDispatch()
  const data = useSelector(state => state)

  const handleClick = () => { 
    dispatch({type: 'FETCH_TODOS'})
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}> Fetch </button>
        <br/>
        <Table data={data.todos} columns={data.columns}/>
        <br />
        {JSON.stringify(data)}
      </header>
    </div>
  );
}

export default App;
