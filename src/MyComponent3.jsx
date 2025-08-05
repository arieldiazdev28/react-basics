import { useState } from "react";

const MyComponent3 = () => {
  const [car, setCar] = useState({
    year: 2025,
    make: "Ford",
    model: "Escape",
  });

  const handleNameChange = (e) => {
    setCar((c) => ({
      ...c,
      year: e.target.value,
    }));
  };

  const handleMakeChange = (e) => {
    setCar((c) => ({
      ...c,
      make: e.target.value,
    }));
  };

  const handleModelChange = (e) => {
    setCar((c) => ({
      ...c,
      model: e.target.value,
    }));
  };
  return (
    <div>
      <p>
        Your favorite car is: {car.year} {car.make} {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleNameChange} />
      <br />
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <br />
      <input type="text" value={car.model} onChange={handleModelChange} />
    </div>
  );
};

export default MyComponent3;
