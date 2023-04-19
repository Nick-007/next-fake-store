"use client";
import { useRouter } from "next/navigation";
import React from "react";
//import Link from 'next/link';

const ListComponent = ({ data, clickable }) => {
  const router = useRouter();
  return (
    <div className="py-16 text-[#ddd] grid lg:grid-cols-4 md:grid-cols-3  sm:grid-cols-2 grid-cols-2  gap-5">
      {data?.map((item) => {
        const getId = () => {
          router.push(`/productdetail/${item?.id?.toString()}`);
        };
        return (
          //<Link href={`productdetail/${item.id}`}>
          <div
            onClick={clickable ? getId : null}
            className="
        bg-[#090909]  relative  hover:bg-white hover:text-black rounded-xl shadow-2xl cursor-pointer transition-all duration-200 shadow-black p-8 "
            key={item.id}
          >
            <h1 className=" mb-2  font-bold text-xl ">
              Name:{" "}
              {item?.name?.substring(0, 28) ||
                item?.namely?.substring(0, 28) ||
                item?.title?.slice(0, 28)}
            </h1>
            <div className=" opacity-80 text-sm flex gap-1 flex-col">
              {item.body && <p>Comments : {item?.body?.substring(0, 149)}</p>}
              {item.image && <img src={item.image} />}
              {item.category && <p>Category : {item.category}</p>}

              {item?.rating?.rate && <p>Rating : {item?.rating?.rate}</p>}
              {item.price && (
                <p className=" text-end  text-xs italic mt-5 ">
                  Price : {item.price}$
                </p>
              )}
            </div>
            {item.body && (
              <ul className=" p-1  text-xs md:gap-2 gap-1 flex items-end  justify-end md:mt-3 mt-6">
                <li> ❣️2k</li>
                <li>👍🏻502</li>
                <li>💡600</li>
              </ul>
            )}
            {!item.body && !item?.price && (
              <p className=" p-2 text-sm bg-[#111] absolute top-3 rounded-full   right-3">
                📌
              </p>
            )}
            {item?.price && (
              <p className=" p-2 text-sm bg-[#111] absolute top-3 rounded-full   right-3">
                👕
              </p>
            )}
          </div>
          //</Link>
        );
      })}
    </div>
  );
};

export default ListComponent;
