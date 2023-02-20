import { T_Cards } from "@/Helpers/types";
import { FC } from "react";

const ProductCard: FC<T_Cards> = ({title, price, img, model}) => {
  return (
    <div className=" p-4 w-80">
      <a className="block  h-48 rounded overflow-hidden">
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
