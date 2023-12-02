/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import News from "@/components/News";
import More from "../components/More";
import SideBarTwo from "./SideBarTwo";
import Alert from "./Alert";
import { useQuery } from "react-query";
import { API_URL, DEFAULT_HEADER } from "@/lib/contants";
import axios from "axios";
import Loader from "./Loader";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import {
  setData,
  setError,
  setLoading,
} from "@/src/store/features/visitorSlice";
import Spinner from "./Spinner";


const Bar = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [longitude, setLongitude] = useState(null);
  const [latitude, setlatitude] = useState(null);

  // Initialize menuRef with useRef(null)
  const menuRef = useRef(null);
  const { data, isLoading, isError, error } = useQuery(
    "news-visitor",
    async () => {
      const visitorDataFromLocalStorage = JSON.parse(localStorage.getItem("visitor"));
      if(!visitorDataFromLocalStorage){
        try {
          dispatch(setLoading(true));
          const res = await axios.get(
            `${API_URL}/api/zimomeet_app/news-visitors?lat=${latitude}&lng=${longitude}`,
            {
              headers: DEFAULT_HEADER,
            }
          );
          // Save data to localStorage
          localStorage.setItem("visitor", JSON.stringify(res.data));
          dispatch(setData(data?.visitor_data));
          return res.data;

        } catch (error) {
          dispatch(setError(true));
        } finally {
          dispatch(setLoading(false));
        }
      }
      else{
        dispatch(setData(visitorDataFromLocalStorage.visitor_data));
      }
    }
  );
  const findMyState = () => {
    const success = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLongitude(longitude);
      setlatitude(latitude);
    };

    const error = () => {
      console.log("Unable to retrieve your Location");
    };
    navigator.geolocation.getCurrentPosition(success, error);

    if(latitude ==='' && longitude==''){

    }
else{
  
}
  };
 


  const MoreClickHandler = useMemo(
    () => () => {
      setIsOpen(!isOpen);
    },
    [isOpen]
  );

  const handleClickOutside = useMemo(
    () => (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    },
    [menuRef]
  );


  useEffect(() => {
    findMyState();

    const handleClick = (e) => handleClickOutside(e);
    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [handleClickOutside, findMyState]);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {" "}
          <header className="hidden lg:flex justify-between items-center">
            <News
              MoreClickHandler={MoreClickHandler}
              isOpen={isOpen}
              menuRef={menuRef}
            />
            <Navbar />
            <More
              MoreClickHandler={MoreClickHandler}
              isOpen={isOpen}
              menuRef={menuRef}
            />
          </header>
          <header className="lg:hidden">
            <SideBarTwo menuRef={menuRef} />
            <Alert />
          </header>
        </>
      )}
    </div>
  );
};

export default Bar;
