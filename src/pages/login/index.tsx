import Link from "next/link";

type T_TYPES = {};

const LogIn: T_TYPES = () => {
  return (
    <section>
     <h2> This is LogIn page </h2>
      <button>
        <Link href={"/signup"}>Sign Up</Link>
      </button>
      <button>
        <Link href={"/"}>Home</Link>
      </button>
    </section>
  );
};

export default LogIn;
