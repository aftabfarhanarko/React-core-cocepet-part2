import { use } from "react"
import Todo from "./Todo";

export default function Todoes({totdu}){
    const usea = use(totdu);
    return(
        <div className="broders">
            <h2>My ToDo List : {usea.length}</h2>
            {
                usea.map(elements => <Todo key={elements.id} elements={elements}></Todo>)
            }
        </div>
    )
}