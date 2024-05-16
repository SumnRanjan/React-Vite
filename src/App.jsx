import "./App.css";
// import Great from "./Greater";
import { Great, add } from "./Comp/Greater";
import LogIn from "./Comp/form";
import Die from "./Dies/Die";
import DieRoll from "./Dies/DieRoll";
import RandomPokemon from "./Pokemon/Pokemon";
import Greeter from "./Props/1Greet";
import Diess from "./Props/2Die";
import Array from "./Props/3Array";
import Condition from "./Props/4Condition";
import Heading from "./Props/5Heading";
import ColorList from "./Props/6Array";
import Slot from "./Props/7Slot";
import Shopping from "./ShoppingCart/Shopping";

// function Dog() {
//   return <p className="text-lg">Wow!! Bhai Mai Tho Sumn Don Hu....</p>;
// }

const data = [
  { id: 1, item: "eggs", quantity: 12, completed: false },
  { id: 2, item: "milk", quantity: 1, completed: true },
  { id: 3, item: "Chicken", quantity: 4, completed: false },
  { id: 4, item: "carrot", quantity: 6, completed: true },
];

export default function App() {
  return (
    <>
      {/* Shopping List Demo */}
      
      <Shopping items={data}/>
      {/* <ShoppingList items={data} /> */}





















      {/* ---------------------------------------------------- */}
      {/* <Slot val1="A" val2="A" val3="A"></Slot>
      <Slot val1="A" val2="l" val3="A"></Slot> */}

      {/* Rendering with array */}
      {/* <ColorList colors={["red" , "pink" , "purple" , "teal"]} ></ColorList> */}

      {/* <Heading color ="magenta" text="welcome!!" fontSize="20px"> </Heading>
      <Heading color ="teal" text="qwert!!" fontSize="48px"> </Heading> */}
      {/* Conditional */}
      {/* <Condition></Condition>
      <Condition></Condition>
      <Condition></Condition> */}

      {/* Propsss */}

      {/* <Array value={[1,2,3]}/>
    <Array value={["a","b","c"]}/>
    <Array value={{a:1 ,b:2}}/>  object */}

      {/* <Diess num = {10}/>
    <Diess/>
    <Diess num = {5}/> */}

      {/* <Greeter name= "Mittu Don" from ="Sumn DON"/>
    <Greeter name= "Modi ji" from ="Sumn DON"/>
    <Greeter name= "Puttin" from ="love" /> */}

      {/* --------------------------------------------------- */}
      {/* Fisrt few video 1-2 */}
      {/* <h1 className="bg-red-100 text-sky-600 text-6xl m-2 p-6">Hey Angry Bird</h1> */}

      {/* <RandomPokemon/> */}

      {/* <DieRoll/>
      <DieRoll/> */}

      {/* <LogIn/>
      <Great/>
      <Dog/>
      <Great/>
      <Great/>
      <Great/> */}
    </>
  );
}

// export default App;
