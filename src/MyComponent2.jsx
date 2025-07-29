import { useState } from "react";

const MyComponent2 = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handlePaymentChange = (e) => {
    setPayment(e.target.value);
  };

  const handleShippingChange = (e) => {
    setShipping(e.target.value);
  };

  return (
    <main>
      <section>
        <h3>Name:</h3>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Type your name"
        />
        {name && <p>Welcome, {name}</p>}
      </section>

      <section>
        <h3>Quantity:</h3>
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          placeholder="How many items do you want?"
          min={0}
        />
        {quantity && <p>Quantity: {quantity}</p>}
      </section>

      <section>
        <h3>Comments:</h3>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Leave your comments or suggestions"
        ></textarea>
        {comment && <p>Comment: {comment}</p>}
      </section>

      <section>
        <h3>Payment method:</h3>
        <select onChange={handlePaymentChange}>
          <option value="">Select an option</option>
          <option value="Visa">Visa</option>
          <option value="Mastercard">Mastercard</option>
        </select>
        {payment && <p>Payment: {payment}</p>}
      </section>

      <section>
        <h3>Shipping method:</h3>
        <label>
          <input
            type="radio"
            value="Pick Up"
            checked={shipping === "Pick Up"}
            onChange={handleShippingChange}
          />
          Pick Up
        </label>

        <label>
          <input
            type="radio"
            value="Delivery"
            checked={shipping === "Delivery"}
            onChange={handleShippingChange}
          />
          Delivery
        </label>
        {shipping && <p>Shipping: {shipping}</p>}
      </section>
    </main>
  );
};

export default MyComponent2;
