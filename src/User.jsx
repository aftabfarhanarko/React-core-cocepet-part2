// **Use-API-React-Suspense**
import { use } from "react"
// import Users from "./Userse";
import Users from "./Userse.jSx";

export default function user({featchData}){
    const conveart = use(featchData);
    return(
        <div className="broders">
            <h2>User : {conveart.length}</h2>
            {
                conveart.map(element => <Users key={element.id} myElement={element}></Users> )
            }
        </div>
    )
}