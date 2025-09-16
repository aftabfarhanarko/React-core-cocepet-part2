

export default function Todo({elements}){
   console.log(elements);

    return(
        <div className="broders">
            <h3>My Todo List : {elements.title}</h3>
            <h5>User Id : {elements.id}</h5>
        </div>
    )
}