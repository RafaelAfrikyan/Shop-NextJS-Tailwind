import SearchPanel from "@/Components/Search/Search";
import Link from "next/link";
import ProductCard from "@/Components/ProductCard/ProductCard";

type T_TYPES = {};

const HomePage: T_TYPES = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <section className="mt-10 mb-10 flex flex-col justify-center items-center	 w-full mx-auto">
      <h1 className="text-center bold text-xl">Որոնեք Ձեր պահեստամասը</h1>
      <SearchPanel />
      <section className="flex justify-center items-center	 flex-wrap">
        {cards.map((card) => {
          return <ProductCard key={card} />;
        })}
      </section>
    </section>
  );
};

export default HomePage;
