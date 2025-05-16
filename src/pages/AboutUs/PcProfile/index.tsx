import styles from "./style.module.css";
import { defaultXMotionProps } from "@/config/motion_config";
import { profileData } from "@/pages/AboutUs/profileData";
import { motion } from "framer-motion";
import { useState } from "react";

const PcProfile = () => {
  const [selectedCard, setSelectedCard] = useState("c1");

  return (
    <div className={styles.container}>
      {profileData.map((data, index) => {
        const isActive = selectedCard === data.id;
        return (
          <motion.label
            key={data.id}
            className={`${styles.card} ${isActive ? styles.expanded : ""}`}
            onClick={() => setSelectedCard(data.id)}
            {...defaultXMotionProps}
            transition={{ duration: 1, delay: index * 0.3 }}
          >
            <img src={data.imgUrl} alt="data image" />
            <div
              className={`${styles.cardContent} ${isActive ? styles.show : ""}`}
            >
              <h2 className="text-3xl font-semibold uppercase">{data.name}</h2>
              <p className="text-lg font-medium">{data.role}</p>
              <p className="font-thin text-sm">{data.description}</p>
            </div>
          </motion.label>
        );
      })}
    </div>
  );
};

export default PcProfile;
