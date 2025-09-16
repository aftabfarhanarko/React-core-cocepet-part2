// **Use-API-React-Suspense**

import { use } from "react"

export default function user({featchData}){
    const conveart = use(featchData);
    console.log(conveart);
    return(
        <div className="broders">
            <h2>User : {conveart.length}</h2>
        </div>
    )
}