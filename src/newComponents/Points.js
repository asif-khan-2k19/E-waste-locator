import React, { useState } from "react";

const InvoiceGenerator = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemPoints, setItemPoints] = useState("");
  const [itemQuantity, setItemQuantity] = useState(1);

  const addItem = () => {
    if (itemName && itemPoints) {
      const newItem = {
        name: itemName,
        price: parseFloat(itemPoints),
        quantity: parseInt(itemQuantity),
      };
      setItems([...items, newItem]);
      setItemName("");
      setItemPoints("");
      setItemQuantity(1);
    }
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const calculateTotal = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };

  
  return (
    <div className="container mx-auto px-4 md:px-8 py-24">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">Generate Reward</h1>
      <input
          className="p-2 border rounded mb-2 mt-2  md:mb-0 md:mr-2 w-full md:w-auto"
          type="text"
          placeholder="Center Email"
          value="suritex@renewit.com"
          disabled
        /><input
        className="p-2 border rounded mb-2 mt-2  md:mb-0 md:mr-2 w-full md:w-auto"
        type="text"
        placeholder="User Email"
      />
      <div className="mb-6 flex flex-wrap">
        <datalist id="options">
          <option value="Mobile Phone" />
          <option value="Tablet" />
          <option value="Laptop" />
          <option value="Desktop" />
          <option value="CPU" />
          <option value="Keyboard" />
          <option value="Fridge" />
          <option value="AC" />
          <option value="Washing Machine" />
          <option value="Microwave" />
          <option value="Dishwasher" />
          <option value="Hair Dryer" />
          <option value="Vaccum Cleaner" />
        </datalist>
        
        <input
          className="p-2 border rounded mb-2 mt-2  md:mb-0 md:mr-2 w-full md:w-auto"
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          list="options"
        />
        <input
          className="p-2 border rounded mb-2 mt-2  md:mb-0 md:mr-2 w-full md:w-auto"
          type="number"
          placeholder="Item Points"
          value={itemPoints}
          onChange={(e) => setItemPoints(e.target.value)}
        />
        <input
          className="p-2 border rounded mb-2 mt-2  md:mb-0 md:mr-2 w-full md:w-auto"
          type="number"
          min="1"
          max="100"
          value={itemQuantity}
          onChange={(e) => setItemQuantity(e.target.value)}
        />
        <button
          className="p-2 bg-blue-500 mt-2 text-white rounded hover:bg-blue-600 w-full md:w-auto"
          onClick={addItem}
        >
          Add Item
        </button>
      </div>
      <div className="overflow-x-auto ">
        <table className="w-full mb-6">
          <thead>
            <tr>
              <th className="text-left">Item</th>
              <th className="text-left">Points</th>
              <th className="text-left">Quantity</th>
              <th className="text-left">Total</th>
              <th className="text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price.toFixed(2)}</td>
                <td>{item.quantity}</td>
                <td>{(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button
                    className="p-1 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => removeItem(index)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="font-semibold text-xl">Total Points: {calculateTotal()} <button
          className="p-2 bg-blue-500 mt-2 text-white rounded hover:bg-blue-600 w-full md:w-auto"
          
        >
          Give reward
        </button></div>
    </div>
  );
};

export default InvoiceGenerator;
