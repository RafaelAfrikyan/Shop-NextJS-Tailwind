import { ReactNode } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useRouter } from "next/router";
type T_Props = {
  children: ReactNode;
};

const Layout = ({ children }: T_Props) => {
  const router = useRouter();
  console.log(router, "router");

  return (
    <>
      {router.pathname !== "/login" && router.pathname !== "/signup" && (
        <Header />
      )}
      <main>{children}</main>
      {/* {router.pathname !== "/login" && router.pathname !== "/signup" && (
        <Footer />
      )} */}
    </>
  );
};

export default Layout;
