export default function Slot({ val1, val2, val3 }) {
    const isWinner = val1 === val2 && val1 === val3
  return (
    <div className="flex justify-center w-[100vw] h-[50vh] flex-col items-center text-[72px]">
      <h1>
        {val1} {val2} {val3}
      </h1>
      <h2 style={{color : isWinner ? "green" : "red"}}>
        {isWinner ?  "You Win!!" : "You Lose:("}
        </h2>
        {/* <h3>{isWinner ? "Congrats" : null}</h3> */}
        {isWinner && <h3>Jeet Gaya Bhai tu</h3>}
    </div>
  );
}
