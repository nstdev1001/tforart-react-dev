import { profileData } from "../profileData";
import styles from "./style.module.css";
import { defaultXMotionProps } from "@/config/motion_config";
import { motion } from "framer-motion";
import { Fragment, useState } from "react";

const PcProfile = () => {
  const [selectedCard, setSelectedCard] = useState("c1");

  const handleCardChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCard(event.target.id);
  };

  return (
    <Fragment>
      <div className={styles.container}>
        {profileData.map((profile, index) => (
          <Fragment key={profile.id}>
            <input
              type="radio"
              name="slide"
              id={profile.id}
              checked={selectedCard === profile.id}
              onChange={handleCardChange}
            />
            <motion.label
              htmlFor={profile.id}
              className={styles.card}
              {...defaultXMotionProps}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <img src={profile.imgUrl} alt="profile image" />
            </motion.label>
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
};

export default PcProfile;
