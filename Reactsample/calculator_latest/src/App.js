import "./App.css";
import { useState } from "react";
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  //useState hook is used to store data in react
  const [ip1, setip1] = useState(0); //first number
  const [ip2, setip2] = useState(0); //second number
  const [output, setoutput] = useState(""); //output

  const handleInput1Change = (e) => setip1(e.target.value); // first input number
  const handleInput2Change = (e) => setip2(e.target.value); //second input number

  const handleInputReset = () => {
    setip1(0);
    setip2(0);
    setoutput("");
  };

  //operations input
  //e.currentTarget.name will give the name of the button which was clicked.
  const handleInputOpsChange = (e) => {
    console.log(e.currentTarget.name); //test console log

    //And based on that name, we perform the corresponding  operation
    let operator = e.currentTarget.name;

    let result = 0;
    let n1 = parseInt(ip1);
    let n2 = parseInt(ip2);

    switch (operator) {
      case "+":
        result = n1 + n2;
        break;
      case "-":
        result = n1 - n2;
        break;
      case "x":
        result = n1 * n2;
        break;
      case "/":
        if(n2 !== 0)
          result = n1 / n2;
        break;

      default:
        console.log("default");
        break;
    }
    console.log(result);
    console.log(operator);

    let op = `${ip1} ${operator} ${ip2} = ${result}`;

    console.log(op);
    setoutput(op);
  }; //more than one statements

  return (
    <div className="App">
      <header className="App-header">
        <h1>CALCULATOR</h1>
        <div>
            <Stack direction="row" spacing={2}>
              <Item>INPUT1: <input onChange={handleInput1Change} type="number" value={ip1} /> </Item>
              <Item>INPUT2: <input onChange={handleInput2Change} type="number" value={ip2} /> </Item>
              <Item> OUTPUT {JSON.stringify(output)}</Item> 
            </Stack>
         </div>
         <br />
         <div>
            <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
              <Item><button onClick={handleInputOpsChange} name="+"> + </button></Item>
              <Item><button onClick={handleInputOpsChange} name="-"> - </button></Item>
              <Item><button onClick={handleInputOpsChange} name="x"> x </button></Item>
              <Item><button onClick={handleInputOpsChange} name="/"> / </button></Item>
              <Item><button onClick={handleInputReset}> Reset </button></Item>
            </Stack>
        </div>
  
      </header>
    </div>
  );
}

export default App;
