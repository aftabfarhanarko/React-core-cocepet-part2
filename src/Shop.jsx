import { use } from "react"


export default function shop({myPost}){

    const usea = use(myPost);

    return(
        <div>
            <h1>My Shoping Card </h1>
            <p>My Total Shopinges Card : {usea.length}</p>
        </div>
    )
}