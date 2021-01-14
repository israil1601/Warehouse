const Product = ({ product }) => {
  const { manufacturer, availability, name, price, type, color } =
    product || {};
  return (
    <div className="card d-inline-block h-100 w-100">
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <h6 className="card-subtitle mb-2 text-muted">{manufacturer}</h6>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Type: {type}</li>
          <li className="list-group-item">Price: {price}</li>
          <li className="list-group-item">Availability: {availability}</li>
          <li className="list-group-item">Colors: {color?.join(", ")}</li>
        </ul>
      </div>
    </div>
  );
};

export default Product;
