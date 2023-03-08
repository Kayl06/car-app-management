import { useSelector } from "react-redux";

function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
    return data
      .filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, car) => acc + car.cost, 0);
  });

  const formatCost = () => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(totalCost);
  };

  return (
    <div className="car-value has-text-weight-semibold	">
      Total Cost: {formatCost()}
    </div>
  );
}

export default CarValue;
