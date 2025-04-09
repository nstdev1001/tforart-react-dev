import { profileData } from "../profileData";
import { defaultXMotionProps } from "@/config/motion_config";
import { motion } from "framer-motion";
import { Fragment } from "react/jsx-runtime";

const SpProfile = () => {
  return (
    <div className="container w-full h-full flex flex-col gap-10">
      {profileData.map((data, index) => (
        <Fragment key={index}>
          <motion.img
            className="rounded-e-2xl"
            src={data.imgUrl}
            alt="profile image"
            {...defaultXMotionProps}
            transition={{ duration: 1.5, delay: index * 0.2 }}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default SpProfile;
