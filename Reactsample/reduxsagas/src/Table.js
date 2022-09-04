export default function Table(props) {
  if (props.data.length > 0) {
      return (<table border={1}>
          <thead>
              <tr key={Math.random()}>
                  {props.columns.map(column => (<th key={Math.random()}>{column}</th>))}
              </tr>
          </thead>
          <tbody>
              {props.data.map((row, index) => (<tr key={Math.random()}> {props.columns.map(column =>
                  (<td key={Math.random()}>{row[column]}</td>))}</tr>))}

          </tbody>


      </table>)


  } else {
      return (<div>No Data</div>)
  }


}