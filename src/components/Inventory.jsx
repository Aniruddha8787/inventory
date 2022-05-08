import { useState } from "react";
import "../App.css";

const App = () => {
  const [items, setItems] = useState([
    { itemName: "BOOK", quantity: 4 },
    { itemName: "PEN", quantity: 8 },
    { itemName: "NOTE BOOK", quantity: 2 }
  ]);

  const [totalItemCount, setTotalItemCount] = useState(14);

  const handleQuantityIncrease = (index) => {
    const newItems = [...items];

    newItems[index].quantity++;

    setItems(newItems);
    calculateTotal();
  };

  const handleQuantityDecrease = (index) => {
    console.log(index);

    const newItems = [...items];
    if (newItems[index].quantity <= 0) {
      return;
    }
    newItems[index].quantity--;

    setItems(newItems);
    calculateTotal();
  };

  const calculateTotal = () => {
    const totalItemCount = items.reduce((total, item) => {
      return total + item.quantity;
    }, 0);

    setTotalItemCount(totalItemCount);
  };

  return (
    <div className="app-background">
      <div className="main-container">
        <div className="item-list">
          {items.map((item, index) => (
            <div className="item-container">
              <div className="item-name">{<span>{item.itemName}</span>}</div>
              <div className="quantity">
                <button onClick={() => handleQuantityDecrease(index)}>-</button>
                <span> {item.quantity} </span>
                <button onClick={() => handleQuantityIncrease(index)}>+</button>
              </div>
            </div>
          ))}
        </div>
        <div className="total">Total: {totalItemCount}</div>
      </div>
    </div>
  );
};

export default App;
