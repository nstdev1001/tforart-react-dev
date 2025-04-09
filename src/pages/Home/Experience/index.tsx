import styles from "./style.module.css";
import { defaultYMotionProps } from "@/config/motion_config";
import { motion } from "framer-motion";
import { Fragment } from "react";

const Experience = () => {
  return (
    <Fragment>
      <div
        className={`${styles.experienceContainer} grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-20 mx-auto`}
      >
        <motion.div
          className={`${styles.experienceItem}`}
          {...defaultYMotionProps}
          transition={{ duration: 1 }}
        >
          <h2>05+</h2>
          <p className="text-left">
            Years of <span>Experience</span>
          </p>
        </motion.div>
        <motion.div
          className={`${styles.experienceItem}`}
          {...defaultYMotionProps}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2>20+</h2>
          <p className="text-left">
            Company <span>Served</span>
          </p>
        </motion.div>
        <motion.div
          className={`${styles.experienceItem}`}
          {...defaultYMotionProps}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h2>169+</h2>
          <p className="text-left">
            Completed <span>Projects</span>
          </p>
        </motion.div>
        <motion.div
          className={`${styles.experienceItem}`}
          {...defaultYMotionProps}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h2>100+</h2>
          <p className="text-left">
            Satisfied <span>Client</span>
          </p>
        </motion.div>
      </div>
    </Fragment>
  );
};

export default Experience;
