import "./App.css";
import { useState } from "react";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Counter() {

  const [counter, setCounter] = useState(0);
  const handleIncrement = () => setCounter(counter + 1); //function
  const handleDecrement = () => setCounter(counter - 1); //function
  
  return (

    <div className="App" class="centered" spacing={2}>
      
      <Stack direction="column" spacing={2}>
         Counter: {counter} <br />
      
        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={handleIncrement}> Increment </Button>
          <Button variant="outlined" onClick={handleDecrement}> Decrement </Button>
        </Stack>

        </Stack>
      </div>
  );
}
