"use client";

import { formatPrice } from "@/libs/helper/FormatPrice.";
import { useGetNewArrival } from "@/libs/service/useGetNewArrival";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

type Product = {
  produkname: string;
  produkid: string;
  category: {
    categoryname: string;
  };
  price: number;
  gallery: string[];
};

export const NewArrival = () => {
  const { data } = useGetNewArrival();

  console.log(data);

  return (
    <div className=" w-full flex justify-center items-center flex-col gap-2">
      <div className="w-[90%] flex flex-col gap-2">
        <div className=" w-full flex justify-between p-1 lg:p-6">
          <p className=" text-3xl font-bold  ">New Arrival</p>
          <a className="btn rounded-3xl show btn-neutral">show</a>
        </div>

        <div className=" w-full p-2">
          <Swiper
            className=" w-full p-2 h-[27.2rem]  lg:h-[24.2rem] bg-white"
            spaceBetween={18}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}>
            {data
              ? data.datas.map((items: Product, i: number) => {
                  return (
                    <SwiperSlide key={i}>
                      <div className=" w-full lg:card justify-between lg:w-[16.5rem] h-[27rem] lg:h-[24rem] shadow  flex flex-col">
                        <div className=" lg:h-40 w-full">
                          <img src={items.gallery[0]} alt="" />
                        </div>
                        <div className=" w-full flex flex-col p-3">
                          <p className="text-lg font-semibold">
                            {items.produkname}
                          </p>
                          <p className=" text-lg text-gray-400">
                            {items.category.categoryname}
                          </p>
                          <p className=" text-lg font-semibold">
                            {formatPrice(items.price)}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })
              : ""}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
