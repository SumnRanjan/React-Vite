// export default function Greeter(props){
//     return <h1 className="text-[30px] text-blue-950"> {props.name} Meet Sumn DON</h1>
// }

//2nd way
export default function Greeter({ name = "DON", from = "Noone" }) {
  return (
    <>
      <h1 className="text-[30px] text-blue-950"> {name} Meet Sumn DON</h1>
      <h2>--{from}</h2>
    </>
  );
}
