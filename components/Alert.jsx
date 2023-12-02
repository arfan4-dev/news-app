/* eslint-disable @next/next/no-img-element */
import { API_URL, DEFAULT_HEADER } from '@/lib/contants';
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Loader from './Loader'
const Alert = () => {

  const { data, isLoading, isError, error } = useQuery("all-detail", async () => {
    const res = await axios.get(`${API_URL}/api/zimomeet_app/news-detail?news_id=3`, {
      headers: DEFAULT_HEADER,
    });
    return res.data.data;
  }); 

  if(isLoading){
    return <Loader/>
  }
  return (
    <div className='bg-black  p-5 md:w-full md:h-[70px] lg:w-[845px]  lg:h-[90px]  xl:w-[1015px]  xl:h-[90px] 2xl:w-[1180px] 2xl:h-[96px] 3xl:w-[1213px] 3xl:h-[96px] flex justify-evenly items-center overflow-hidden'>
      {/* Set max width for the image */}
      <img className='w-[100px] max-w-full mr-4 lg:w-[150px] 3xl:w-[227px] h-[16px]' src="/assets/liveUpdate.svg" alt="" />

      {/* Set max width for the paragraph */}
      <p className="max-w-full text-justify overflow-hidden text-white text-[8px] lg:text-[10px] xl:text-[14px]">
        <p className='text-[12px] lg:text-[16px] font-bold'>{data.title}</p>
      <span>{data.content.slice(0,210)}.....</span>
      </p>
    </div>
  );
};

export default Alert;
