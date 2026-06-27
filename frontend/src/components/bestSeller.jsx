import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductsItems from "./ProductItems";

function BestSeller() {
  const { products } = useContext(ShopContext);

  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, []);

  return (
    <div className="my-10 ">
      <div className="text-center text-3xl py-8">
        <Title text1={"Best"} text2={"Seller"} />
        <p className="w-3/4 m-auto text-xs sm:text-xs md:text-base text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, at,
          aliquid animi quaerat, consequuntur fugiat pariatur fugit consectetur
          quis laborum esse praesentium deleniti incidunt unde voluptas. Quae
          expedita sit perferendis?
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 p-2">
        {bestSeller.map((item, index) => (
          <ProductsItems
            key={index}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default BestSeller;
