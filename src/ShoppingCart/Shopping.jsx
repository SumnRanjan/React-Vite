import ShoppingList from "./ShoppingList";
export default function Shopping({ items }) {
  return (
    <>
      <ul>
        {items.map((i) => (
        //   <ShoppingList
        //     key={i.id}
        //     item={i.item}
        //     quantity={i.quantity}
        //     completed={i.completed}
        //   />
        <ShoppingList key={i.id} {...i}/>
        
        ))}
      </ul>
    </>
  );
}

// export default function ShoppingList({ items }) {
//   return (
//     <>
//       <ul>
//         {items.map((i) => (
//           <li key={i.id}
//             style={{
//               color: i.completed ? "gray" : "red",
//               textDecoration: i.completed ? "line-through" : "none",
//             }}
//           >
//             {i.item} - {i.quantity}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }
