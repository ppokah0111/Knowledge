export default function Table (props){
 if(props.todos.length > 0){
    return(
        <table border={1}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>UserId</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>
                    {props.todos.map(todo => (<tr>
                        <td>{todo.id}</td>
                        <td>{todo.userId}</td>
                        <td>{todo.title}</td>
                        <td>{todo.completed? "true": "false"}</td>
                    </tr>))}

            </tbody>
        </table>
    )
 }else {
    return (<div></div>)
 }
   
}