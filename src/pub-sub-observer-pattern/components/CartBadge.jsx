import { useState } from "react";
import { useEvent } from "../useEvent";

const CartBadge = () => {
  const [items, setItems] = useState([]);
  useEvent("cart:add", (data) => {
    setItems((prevItems) => [...prevItems, data]);
  });
  return (
    <div className="cart-badge">
      <h2>Subscriber</h2>
      <div>
        Cart Items: {items.length}
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CartBadge;
