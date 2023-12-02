import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useQuery } from "react-query";
import axios from "axios";
import { API_URL, DEFAULT_HEADER } from "@/lib/contants";

const More = ({MoreClickHandler, isOpen, menuRef}) => {
  const controls = useAnimation();

  const { data, isLoading, isError, error } = useQuery(
    "category-wise-news",
    async () => {
      const res = await axios.get(`${API_URL}/api/zimomeet_app/news-category`, {
        headers: DEFAULT_HEADER,
      });

      return res.data.data.slice(8, 15);
    }
  );

  const rightArr = ["/assets/Zimo.svg", "MORE"];

  const [RcurrentIndex, setRCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setRCurrentIndex((prevIndex) => (prevIndex + 1) % rightArr.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [setRCurrentIndex, rightArr.length]);

  useEffect(() => {
    if (isOpen) {
      // If the menu is open, animate it in
      controls.start({ opacity: 1, x: 0 });
    } else {
      // If the menu is closed, animate it out
      controls.start({ opacity: 0, x: -100 });
    }
  }, [isOpen, controls]);
  return (
    <aside
      className="bg-black text-white relative p-4 w-[50px] h-[213px]"
      style={{ borderBottomLeftRadius: "20px" }}
      onClick={MoreClickHandler}
    >
      {RcurrentIndex === 1 ? (
        <button
          onClick={MoreClickHandler}
          className="mt-7 hover:cursor-pointer lg:tracking-[4px] -rotate-90 absolute ml-3  left-[-10px] tracking-[1.5px] lg:text-2xl lg:top-20 lg:right-1  xl:text-3xl xl:top-20 xl:right-0"
        
        >
          {rightArr[RcurrentIndex]}
        </button>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          onClick={MoreClickHandler}
          src={rightArr[RcurrentIndex]}
          alt="Background Image"
          className="w-[23px] h-[90px] mt-10"
         
        />
      )}

<div
 ref={menuRef}
>
{isOpen &&
        (isLoading ? (
          <p>Loading....</p>
        ) : (
          <motion.nav
          initial={{ opacity: 0,x:-5 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          onClick={MoreClickHandler}
            style={{ borderBottomLeftRadius: "20px" }}
           
            className="h-[330px] p-2 w-[170px] bg-black absolute top-0 right-0 3xl:w-[338px]  lg:w-[230px] lg:h-[318px] 2xl:w-[280px] 2xl:h-[320px] 3xl:h-[370px] sm:p-5"
          >
            <h1 
   
             className=" text-xl sm:tracking-[5px] text-end sm:hover:cursor-pointer xl:text-2xl 3xl:text-4xl">
              More
            </h1>
            <ul className="flex mt-5 gap-4 flex-col">
              {data.map((val, index) => (
                <li
                  key={index}
                  className=" tracking-[2px] text-end text-[14px] font-bold"
                 
                >
                  {val.name}
                </li>
              ))}
            </ul>
          </motion.nav>
        ))}
</div>
      
    </aside>
  );
};

export default More;
