import SearchPanel from "@/Components/Search/Search";
import Link from "next/link";
import ProductCard from "@/Components/ProductCard/ProductCard";
import { cards } from "@/Helpers/Constants/cards";

type T_TYPES = {};

const HomePage: T_TYPES = () => {
  return (
    <section className="mt-10 mb-10 flex flex-col justify-center items-center	 w-full mx-auto">
      <h1 className="text-center bold text-xl">Որոնեք Ձեր պահեստամասը</h1>
      <SearchPanel />
      <section className="flex justify-center items-center flex-wrap">
        {cards.map(({ title, img, model, price, id }) => {
          return (
            <ProductCard
              title={title}
              img={img}
              model={model}
              price={price}
              id={id}
            />
          );
        })}
      </section>
    </section>
  );
};

export default HomePage;
