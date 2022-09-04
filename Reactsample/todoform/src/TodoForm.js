import {Form, Button, Alert} from "react-boostrap"
import {useState} from "react"

export default function TodoForm(){

    const [formData, setFormData] = useState({})
    const [response, setResponse] = useState({})

    const captureTitle = (e) => {
        setFormData({...formData, title: e.target.value})
    }

    const captureBody = (e) => {
        setFormData({...formData, body: e.target.value})
    }

    const captureUserId = (e) => {
        setFormData({...formData, userId: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.console.log(formData);
        fetch(`https://jsonplaceholder.typicode.code.com/posts`,{
            method: 'POST',
            body: JSON.stringify(formData),
            headers:{'Content-type':'application/json; charset=UTF-8',},
        })
        .then((response) => response.json())
        .then((json) => setResponse(json));
    }

    return(<div>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlled="formBasicText">
                <Form.Label> Enter paragraphs</Form.Label>
                <Form.Control placeholder="Enter paragraphs" onChange={capturePara}/>
            </Form.Group>
            
            <Button variant="primary" type="submit">Submit</Button>
        </Form>

        <Alert variant="primary" key="primary">
            <table border={1}>
                <thead>
                    <tr>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {response.map(row=>(<tr>{row}</tr>))}
                </tbody>
            </table>
        </Alert>
    </div>)
}