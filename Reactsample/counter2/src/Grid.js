import { Table } from 'react-bootstrap';

export default function Grid(props) {
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    {props.columns.map(columnName => (<th>{columnName}</th>))}
                </tr>
            </thead>
            <tbody>
                {props.data.map(row => {
                    return (<tr>  {props.columns.map(columnName => (<td>{row[columnName]}</td>))}</tr>)
                })}
            </tbody>
        </Table>
    )
}