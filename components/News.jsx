import { API_URL, DEFAULT_HEADER } from "@/lib/contants";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { motion, useAnimation } from "framer-motion";
import Loader from "./Loader";
const News = ({MoreClickHandler, isOpen, menuRef}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();


  const { data, isLoading, isError, error } = useQuery(
    "news_contry",
    async () => {
      const res = await axios.get(
        `${API_URL}/api/zimomeet_app/news-country`,

        {
          headers: DEFAULT_HEADER,
        }
      );
      return res.data.data;
    }
  );
  const leftArr = [ "/assets/Zimo.svg","NEWS"];
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % leftArr.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex, leftArr.length]);

    useEffect(() => {
      if (isOpen) {
        // If the menu is open, animate it in
        controls.start({ opacity: 1, x: 0 });
      } else {
        // If the menu is closed, animate it out
        controls.start({ opacity: 0, x: -100 });
      }
    }, [isOpen, controls]);

// console.log('News:',isOpen)
  return (
    <aside
      
      className="bg-black text-white relative p-4 w-[50px] h-[213px]"
      style={{ borderBottomRightRadius: "20px" }}
      onClick={MoreClickHandler}
    >

{currentIndex === 1 ? (
        <button
          className="mt-7 hover:cursor-pointer lg:tracking-[6px] -rotate-90 absolute top-16 ml-2  left-[-10px] tracking-[1.5px]  lg:text-2xl lg:top-20 lg:right-1  xl:text-3xl xl:top-20 xl:right-0  "
        
          onClick={MoreClickHandler}  
        >
          {leftArr[currentIndex]}
        </button>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
      
          onClick={MoreClickHandler}
          src={leftArr[currentIndex]}
          alt="Background Image"
          className="w-[23px] h-[90px] mt-10"
         
        />
      )}


      {isOpen && (
      
        <motion.nav
        
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          style={{ borderBottomRightRadius: "20px" }}
          className="h-[320px] hover:cursor-pointer w-[170px] bg-black absolute top-0 left-0 sm:p-5 lg:w-[230px] 2xl:w-[280px] 3xl:w-[338px] 3xl:h-[370px]"
        >
          <h1
            className="text-xl tracking-[5px] xl:text-2xl  3xl:text-4xl"
          >
            News
          </h1>
          <ul className="flex gap-4 flex-col mt-5">
            {(isLoading)?<Loader/>:data.map((val, index) => (
              <li
                key={index}
               
                className="tracking-[2px] text-[14px] font-bold"
              >
                {val.name}
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </aside>
  );
};

export default News;
