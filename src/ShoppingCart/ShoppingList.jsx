import PropTypes from "prop-types"
export default function ShoppingList({ item, quantity, completed }){
    const style = {color: completed ? "gray" : "red" , textDecoration: completed ? "line-through" : "none",}
  return (
    <li style={style}>
      {item} - {quantity}
    </li>
  );
}


ShoppingList.PropTypes ={
  item : PropTypes.string,
  quantity : PropTypes.number,
  completed : PropTypes.bool
}
