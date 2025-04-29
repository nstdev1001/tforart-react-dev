import { profileData } from "../profileData";
import { defaultXMotionProps } from "@/config/motion_config";
import { motion } from "framer-motion";

const SpProfile = () => {
  return (
    <div className="container w-full h-full flex flex-col gap-14">
      {profileData.map((data, index) => (
        <div key={index}>
          <motion.img
            className="rounded-e-2xl shadow-gray-500 shadow-light"
            src={data.imgUrl}
            alt="profile image"
            {...defaultXMotionProps}
            transition={{ duration: 1.5, delay: index * 0.2 }}
          />
          <motion.div
            className="mt-3"
            {...defaultXMotionProps}
            transition={{ duration: 1.5, delay: index * 0.2 }}
          >
            <h2 className="text-2xl font-semibold uppercase">{data.name}</h2>
            <p className="text-md font-medium">{data.role}</p>
            <p className="font-thin text-sm">{data.description}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default SpProfile;
