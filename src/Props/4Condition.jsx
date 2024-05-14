export default function DoubleDice() {
  const num1 = Math.floor(Math.random() * 3) + 1;
  const num2 = Math.floor(Math.random() * 3) + 1;
  //styling
  const isWinner = num1 === num2
  const styles = { color: isWinner ? "green" : "red" };
  return (
    <div>
      <h1 className="text-[40px]" style={styles}>
        Double Dice
      </h1>
      {isWinner && <h3 className="text-[35px]">You Win!</h3>}
      <p className="text-[30px]">Num1 : {num1}</p>
      <p className="text-[30px]">Num1 : {num2}</p>
    </div>
  );
}

// export default function DoubleDice() {
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;
//
//     return (
//       <div>
//         <h1 className="text-[40px]">Double Dice</h1>
//           {num1 === num2 && <h3 className="text-[35px]">You Win!</h3> }
//           <p className="text-[30px]" >Num1 : {num1}</p>
//           <p className="text-[30px]" >Num1 : {num2}</p>
//       </div>
//     )
//   }

// export default function DoubleDice() {
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;
//     return (
//       <div>
//         <h1 className="text-[40px]" >Double Dice</h1>
//           {num1 === num2 ? <h3 className="text-[35px]">You Win!</h3> : <h3 className="text-[35px]">You Lose :(</h3> }
//           <p className="text-[30px]" >Num1 : {num1}</p>
//           <p className="text-[30px]" >Num1 : {num2}</p>
//       </div>
//     )
//   }

// export default function DoubleDice() {
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;
//     return (
//       <div>
//           <h2>{ num1 === num2 ? "You win" : "You Lose :("}</h2>
//           <p>Num1 : {num1}</p>
//           <p>Num1 : {num2}</p>
//       </div>
//     )
//   }

// export default function DoubleDice() {
//   const num1 = Math.floor(Math.random() * 3) + 1;
//   const num2 = Math.floor(Math.random() * 3) + 1;
//   const result = num1 === num2 ? "You win" : "You Lose :("
//   return (
//     <div>
//         <h2>{result}</h2>
//         <p>Num1 : {num1}</p>
//         <p>Num1 : {num2}</p>
//     </div>
//   )
// }
