import { useState } from "react";

const MyComponent4 = () => {
  const [carList, setCarList] = useState([]);
  const [car, setCar] = useState({
    year: new Date().getFullYear(),
    make: "",
    model: "",
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const createCar = () => {
    return {
      year: car.year,
      make: car.make,
      model: car.model,
    };
  };

  const handleAddCar = () => {
    const newCar = createCar();
    if (isUpdating == true && editIndex !== null) {
      setCarList((cl) =>
        cl.map((car, id) => (id === editIndex ? newCar : car))
      );
      setIsUpdating(false);
      setEditIndex(null);
    } else {
      setCarList((cl) => [...cl, newCar]);
    }
    resetInputs();
  };

  const handleRemoveCar = (index) => {
    setCarList((cl) => cl.filter((_, i) => i !== index));
  };

  const handleUpdateCar = (index) => {
    const carToEdit = carList[index];

    setCar({
      year: carToEdit.year,
      make: carToEdit.make,
      model: carToEdit.model,
    });

    setEditIndex(index);
    setIsUpdating(true);
  };

  const handleYearChange = (e) => {
    setCar({
      ...car,
      year: parseInt(e.target.value),
    });
  };

  const handleMakeChange = (e) => {
    setCar({
      ...car,
      make: e.target.value,
    });
  };

  const handleModelChange = (e) => {
    setCar({
      ...car,
      model: e.target.value,
    });
  };

  const resetInputs = () => {
    setCar({
      year: new Date().getFullYear(),
      make: "",
      model: "",
    });
  };
  return (
    <div>
      <h1>List of cars:</h1>
      <ul>
        {carList.map((car, index) => (
          <li key={index}>
            {car.year} {car.make} {car.model}{" "}
            <button onClick={() => handleRemoveCar(index)}>Remove</button>
            <button onClick={() => handleUpdateCar(index)}>Edit</button>
          </li>
        ))}
      </ul>
      <input type="number" value={car.year} onChange={handleYearChange} />{" "}
      <br />
      <input
        type="text"
        value={car.make}
        onChange={handleMakeChange}
        placeholder="Enter the make"
      />{" "}
      <br />
      <input
        type="text"
        value={car.model}
        onChange={handleModelChange}
        placeholder="Enter the model"
      />{" "}
      <br />
      <button onClick={handleAddCar}>{isUpdating ? "Update" : "Add"}</button>
      {isUpdating && (
        <button
          onClick={() => {
            resetInputs();
            setIsUpdating(false);
            setEditIndex(null);
          }}
        >
          Cancel
        </button>
      )}
    </div>
  );
};

export default MyComponent4;
