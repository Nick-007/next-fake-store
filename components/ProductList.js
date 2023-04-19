"use client";
import useSWR from "swr";

import fetchData from "./dataFetcher";

import ErrorCustom from "./ErrorCustom";
import ListComponent from "./ListComponent";
import CustomLoading from "./CustomLoading";
import Details from "./Details";
const ProductList = () => {
  const { data, error } = useSWR("https://fakestoreapi.com/products",fetchData);

  if (error) return <ErrorCustom />;
  if (!data & !error) return <CustomLoading />;
  return (
    <section className=" pt-20">
      <Details
        text="My Fake Store"
        description="Displaying list items from fake store API."
      />
      <ListComponent data={data} clickable={true}/>
    </section>
  );
};
export default ProductList;