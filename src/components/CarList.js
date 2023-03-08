import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();

  const { cars, name } = useSelector(({ cars: { data, searchTerm }, form }) => {
    const filteredCars = data.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return {
      cars: filteredCars,
      name: form.name,
    };
  });

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    // DECIDE IF THIS CAR SHOULD BE BOLD

    // if name is empty then return empty; otherwise return search results.
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div className={`mt-5 p-5 panel ${bold && "bold"}`} key={car.id}>
        <p>
          {car.name} - ${car.cost}
        </p>

        <div className="">
          <button
            className="delete is-large"
            onClick={() => handleCarDelete(car)}
          ></button>
        </div>
      </div>
    );
  });
  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}

export default CarList;
