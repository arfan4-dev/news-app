/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Loader from '../Loader';
import Link from 'next/link';

const Content = ({ contentData, contentLoading, contentError }) => {
  return (
    <div
      className="mx-auto w-[90%] h-[80%] md:w-[600px] md:h-[80%] lg:w-[400px] lg:h-[400px] xl:w-[475px] xl:h-[500px] 2xl:w-[560px] 2xl:h-[582px] 3xl:w-[572px] 3xl:h-[572px] rounded-[20px] p-5 "
      style={{ border: "1px #707070 solid", }}
    >
      <div className="flex items-center space-x-4 mb-5">
        <img
          className="w-10 sm:w-8 xl:w-14"
          src="/assets/ZIMO NEWS 3.png"
          alt=""
        />
        <p className="xl:text-[16px] 2xl:text-[20px] tracking-[4px] ">
          MORE READ
        </p>
      </div>
      {!contentLoading && !contentError ? (
        contentData.map((val, index) => {
          return (
            <div className="mb-4" key={index}>
              <Link href={`/news-detail/${val.id}`}>
                <p className="text-[8px] tracking-[2px] text-left md:text-[10px] xl:text-[12px] 3xl:text-[14px] md:tracking-[2px]">
                  {val.title.toUpperCase()}.
                </p>
              </Link>
            </div>
          );
        })
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Content;
