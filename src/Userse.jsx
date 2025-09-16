export default function Users({myElement}){
    console.log(myElement)
    const {name,email,phone} = myElement

    return(
        <div className="broders">
            <h3>Name : {name} </h3>
            <p>Email : {email} </p>
            <p>Phone : {phone}</p>
        </div>
    );
} 