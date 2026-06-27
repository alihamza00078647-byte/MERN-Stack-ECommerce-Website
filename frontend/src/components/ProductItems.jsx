import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { products } from "../assets/assets";

function ProductsItems({ id, image, name, price }) {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      to={`/product/${id}`}
      className="text-gray-700 cursor-pointer remove-underline"
    >
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={image[0]}
          alt={name}
        />
      </div>
      <p className="text-sm pt-3 pb-1 text-gray-700">{name}</p>
      <p className="text-sm font-medium text-gray-700">
        {currency}
        {price}
      </p>
    </Link>
  );
}

export default ProductsItems;
