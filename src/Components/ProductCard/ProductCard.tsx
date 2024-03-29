import { T_Cards } from "@/Helpers/types";
import { FC, useState } from "react";
import ProductView from "../ProductView/ProductView";

const ProductCard: FC<T_Cards> = ({ title, price, img, model }) => {
  const [openProductView, setOpenProductView] = useState(false);

  return (
    <div className=" p-4 w-80">
      <ProductView
      price={price}
      name={title}
      img={img}
        openProductView={openProductView}
        setOpenProductView={setOpenProductView}
      />
      <a
        className="block  h-48 rounded overflow-hidden"
        onClick={() => setOpenProductView(true)}
      >
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={img}
        ></img>
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {model}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {title}
        </h2>
        <p className="mt-1">{price}դրամ</p>
      </div>
    </div>
  );
};

export default ProductCard;
