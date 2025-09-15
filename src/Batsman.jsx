import { useState } from "react";

export default function Batsman() {
  const [run, setRun] = useState(0);
  const [singl, setSingl] = useState(0);
  const [four, setFour] = useState(0);

  const [six, setSix] = useState(0);

  const singleRuns = () => {
    const ubdeat = run + 1;
    const silgel = singl + 1;
    setSingl(silgel);
    setRun(ubdeat);
  };
  const fourRuns = () => {
    const ubdeat = run + 4;
    const fours = four + 1;
    setFour(fours);
    setRun(ubdeat);
  };
  const sixRuns = () => {
    const ubdeat = run + 6;
    const sixes = six + 1;
    setSix(sixes);
    setRun(ubdeat);
  };
  const styles = {
    display: "flex",
    gap: "130px",
  };
  const bol2 = {
    display: "flex",
    gap: "170px",
    marginTop: "40px",
  };
  return (
    <div>
      <div style={styles}>
        <p>Total Single Run : {singl}</p>
        <p>Total Four : {four}</p>
        <p>Total Sixe : {six}</p>
      </div>
      {run > 50 && <h1>Congrlutions 🎉</h1>}
      <h2>Secore : {run}</h2>

      <div style={bol2}>
        <button onClick={singleRuns}>Single</button>
        <button onClick={fourRuns}>Four</button>
        <button onClick={sixRuns}>Six</button>
      </div>
    </div>
  );
}
