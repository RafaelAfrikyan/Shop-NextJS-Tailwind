import Link from "next/link";

type T_TYPES = {};

const HomePage: T_TYPES = () => {
  return (
    <section>
      <h2>This is Home Page</h2>
      <button>
        <Link href={"/login"}>Log In</Link>
      </button>
     <button> <Link href={"/signup"}>Sign Up</Link></button>
    </section>
  );
};

export default HomePage;
