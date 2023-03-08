import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store";

function CarForm() {
  const dispatch = useDispatch();

  const { name, cost } = useSelector((state) => {
    // Access the state
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value)); // Changing the state in redux store
  };

  const handleCostChange = (event) => {
    const carCost = parseInt(event.target.value) || 0;

    dispatch(changeCost(carCost)); // Changing the state in redux store
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addCar({ name, cost }));
  };

  return (
    <div className="car-form panel mb-6">
      <h4 className="subtitle is-3">Car details</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>
        </div>

        <div className="field-group">
          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              value={cost || ""}
              onChange={handleCostChange}
            />
          </div>
        </div>

        <div className="field">
          <button className="button is-dark is-fullwidth">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
