import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import React, { Fragment } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Fragment>
      <Navbar />
      <div className="w-full h-screen flex flex-col gap-[200px]">
        <div className="max-w-full">{children}</div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Layout;
