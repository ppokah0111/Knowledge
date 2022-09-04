import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { createRef } from 'react';
import Table from './Table';

function App() {
  const idRef = createRef()
  const selectRef = createRef()
  const dispatch = useDispatch()
  const data = useSelector(state => state)

  const handleClick = () => {
    console.log(selectRef.current.value)
    dispatch({ type: 'FETCH',for:selectRef.current.value })
  }

  const handleFetchByIdClick = () => {
    dispatch({ type: 'FETCH_BY_ID', idTofetch: idRef.current.value,for:selectRef.current.value  })
  }
  const handleSelectChange=(e)=>{
    dispatch({type:"CHANGE_SELECTION",selecttype:e.target.value})
  }
  return (
    <div className="App">
      <header className="App-header">
        <label>
          Select a value
          <select ref={selectRef} onChange={handleSelectChange}>
            <option value={"todos"}>TODOS</option>
            <option value={"comments"}>COMMENTS</option>
            <option value={"posts"}>POSTS</option>
            <option value="albums">ALBUMS</option>
            <option value="photos">PHOTOS</option>

          </select>
        </label>
        <br />
        <label>
          Enter todo id to fetch
          <input type="number" ref={idRef} />
        </label>
        <button onClick={handleFetchByIdClick}>Fetch By id</button>

        <button onClick={handleClick}>Fetch All</button>
        <br />
        <p>Data fetched for {data.selecttype}</p>
        <Table data={data.todos} columns={data.columns} />
      </header>
    </div>
  );
}

export default App;

