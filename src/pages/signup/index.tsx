import Link from "next/link";

type T_TYPES = {};

const SignUp: T_TYPES = () => {
  return (
    <section>
      <h1> This is SignUp page</h1>
      <button>
        <Link href={"/login"}>Log In</Link>
      </button>
      <button>
        <Link href={"/"}>Home</Link>
      </button>
    </section>
  );
};

export default SignUp;
