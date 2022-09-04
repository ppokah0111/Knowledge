import {Form, Button, Alert, Table} from "react-boostrap"
import {useState} from "react"

export default function Lopsum (){
    const [formData, setFormData] = useState({})
    const [response, setResponse] = useState([])

    const capturePara= (e) => {
        setFormData({...formData, para:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://baconipsum.com/api/?type=all-meat&paras=${formData.para}&start-with-lorem=1`)
        .then(res=>res.json())
        .then(res=>setResponse(res))
    }

    return(<div>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlled="FormBasicText">
                <Form.Label> Enter paragraphs</Form.Label>
                <Form.Control placeholder="Enter paragraphs" onChange={capturePara}/>
            </Form.Group>
            <Button variant="primary" type="submit"> Submit</Button>
        </Form>

        <Table striped bordered hover variant="dark">
            <thread>
                <tr>
                    <th>Data</th>
                </tr>
            </thread>

            <tbody>
                {response.map(row=>(
                   <tr>
                        <td>  {row}  </td> 
                   </tr>
                ))}
            </tbody>
        </Table>

    </div>)
}