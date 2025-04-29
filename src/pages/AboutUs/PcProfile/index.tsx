import { profileData } from "../profileData";
import styles from "./style.module.css";
import { defaultXMotionProps } from "@/config/motion_config";
import { motion } from "framer-motion";
import { Fragment, useState } from "react";

const Pcdata = () => {
  const [selectedCard, setSelectedCard] = useState("c1");

  const handleCardChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCard(event.target.id);
  };

  return (
    <Fragment>
      <div className={styles.container}>
        {profileData.map((data, index) => (
          <Fragment key={data.id}>
            <input
              type="radio"
              name="slide"
              id={data.id}
              checked={selectedCard === data.id}
              onChange={handleCardChange}
            />

            <motion.label
              htmlFor={data.id}
              className={styles.card}
              {...defaultXMotionProps}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <img src={data.imgUrl} alt="data image" />
              <div className={`${styles.cardContent}`}>
                <h2 className="text-3xl font-semibold uppercase">
                  {data.name}
                </h2>
                <p className="text-lg font-medium">{data.role}</p>
                <p className="font-thin text-sm">{data.description}</p>
              </div>
            </motion.label>
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
};

export default Pcdata;
