import { useState } from "react"

export default function Boller (){
 
    const [ball , setBall] = useState(0)
    const [wyed , setWyed] = useState(0)
    const [nobol , setNobol] = useState(0)
    const [over , setOver] = useState(0)

    const bollas = () => {
        const bal = ball + 1;
        const ovr = over + 2;
        setOver(ovr);
        setBall(bal);
    }
    const wyeads = () => {
        const wye = wyed + 1;
        setWyed(wye);
    }
    const noBall = () => {
        const no = nobol + 1;
        setNobol(no);
    }

    const bol = {
        display:"flex",
        gap:"130px",
        marginTop:"30px"
    }
    const bol2 = {
        display:"flex",
        gap:"130px",
        marginTop:"40px"
    }
    const bol3 = {
        marginTop:"80px",
        borderTop:"2px solid yellow",
        paddingTop:"20px"
    }
    const run = {
        textAlign:"left"
    }
    return(
        <div>
            <h2 style={bol3}>Boller Count Ball Secore</h2>
            <div style={bol}>
                <p>Total Ball : {ball}</p>
                <p>Wyed : {wyed}</p>
                <p>No Boll : {nobol}</p>
            </div>
            <p style={run}>Total Run In This Over : {over}</p>
            {
                ball == 6 && <h1>Your Over is Complate 😎</h1>
            }
            {
                ball == 3 && <h1>Congrlutions Wickts 1 😂</h1>
            }
            {
                wyed == 6 && <h1>Bollings Changes  😤</h1>
            }
            {
                nobol == 5 && <h1>Not You Come Other Time Bolling ❌</h1>
            }
            <div style={bol2}>
                <button onClick={bollas}>Ball</button>
                <button onClick={wyeads}>Wyed</button>
                <button onClick={noBall}>No Boll</button>
            </div>
        </div>
    )
}