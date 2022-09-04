import { useDispatch, useSelector } from "react-redux";

export default function TodoAll() {

    //use dispatch is used to send request
  const dispatch = useDispatch();

  //useSelector is used to get the required data from state
  const data = useSelector((state) => state);

  //Action is triggered by using dispatch
  //Action will contsin actionType + any data
  const handleclick = () => dispatch({ type: "fetchAll" });

  return (
    <div className="App">
      <header className="App-header">
        
        <button class="style" onClick={handleclick}> Fetch All </button>
        <br />
        {JSON.stringify(data)}

      </header>
    </div>
  );

}