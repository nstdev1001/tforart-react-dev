import ProductsBar from "./ProductsBar";
import BackToTop from "@/components/BackToTopButton";
import Layout from "@/components/Layout/Layout";
import {
  defaultOpacityMotionProps,
  defaultXMotionProps,
} from "@/config/motion_config";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

const Portfolio = () => {
  return (
    <Layout>
      <div className="portfolio-container flex flex-col gap-5 max-w-[1200px] p-[20px] md:p-[50px] pt-[70px] md:pt-[100px] lg:pt-[200px] mx-auto">
        <h1 className="uppercase text-5xl font-extrabold">
          Tforart&apos;s{" "}
          <motion.span className="font-thin" {...defaultOpacityMotionProps}>
            products
          </motion.span>
        </h1>
        <motion.p
          className="page-description"
          {...defaultXMotionProps}
          transition={{ duration: 2 }}
        >
          Tổng hợp các &quot;tuyệt phẩm dự án&quot; mà Tforart đã từng thực
          hiện.
        </motion.p>

        <div className="products-bar mt-10 flex flex-col gap-[50px]">
          <ProductsBar />
          <Outlet />
        </div>
        <BackToTop />
      </div>
    </Layout>
  );
};

export default Portfolio;
