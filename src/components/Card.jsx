import React from "react";
import { motion } from "framer-motion";
import { FaRegFileAlt } from "react-icons/fa";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Card = ({ handleremove, addData, Referance }) => {
  return (
    <motion.div
      drag
      dragConstraints={Referance}
      whileDrag={{ scale: 1.2 }}
      whileHover={{ scale: 1.2 }}
      dragTransition={{ bounceStiffness: 200, bounceDamping: 8 }}
      className=" relative w-60 h-72 rounded-[50px] bg-zinc-900/50 py-10 px-8 overflow-hidden text-white"
    >
      <FaRegFileAlt />
      <p className="text-sm mt-5 ">{addData.name} </p>
      <div className="footer absolute bottom-0 w-full  left-0   ">
        <div className="flex items-center justify-between px-8 py-3 mb-3">
          <h5>{addData.dueDate} </h5>
        </div>

        <div
          onClick={() => handleremove(addData)}
          className="tag w-full py-4 bg-green-600 flex items-center justify-center"
        >
          <h3 className="text-sm text-red-700 font-semibold ">Task conpleted</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
