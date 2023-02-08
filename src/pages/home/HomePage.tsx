import SearchPanel from "@/Components/Search/Search";
import Link from "next/link";

type T_TYPES = {};

const HomePage: T_TYPES = () => {
  return (
    <section className="my-20 mx-auto max-w-xl">
      <h1 className="text-center bold text-xl">Որոնեք Ձեր պահեստամասը</h1>
      {/* <SearchPanel /> */}
    </section>
  );
};

export default HomePage;
