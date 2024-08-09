import Header from "@/components/Header";
import React from "react";

type Props = {
  children: React.ReactNode;
  showHero?: boolean;
};
const Layout = ({ children, showHero = false }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {showHero ? "" : ""}
      <div className="container flex-1 py-7">{children}</div>
      {/* <Footer /> */}
    </div>
  );
};
export default Layout;
