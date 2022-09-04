import { Tabs, Tab } from "react-bootstrap"
import TodoForm from './TodoForm'
import Lopsum from './Lopsum'

export default function Tabbed() {
    return (<div>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="todo" title="Todo">
                <TodoForm />
            </Tab>
            <Tab eventKey="profile" title="Profile">
                <Lopsum />
            </Tab>
        </Tabs>

    </div>
    )
}
