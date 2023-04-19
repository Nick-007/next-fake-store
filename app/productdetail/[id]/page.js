"use client";
import useSWR from "swr";
import fetchData from "../../../components/dataFetcher";
import Details from "../../../components/Details";
import ListComponent from "../../../components/ListComponent";
import CartItem from "../../../components/CartItem";

const ProductDetail = ({params:{ id }}) => {
    const { data, error } = useSWR(
        `https://fakestoreapi.com/products/${id}`,
        fetchData
      );
    
    return (
        <div>
        <section className="text-black pt-20">
        <Details
            text="Product Detail"
            description="Product Detail Page"
        />
        <CartItem product={data}/>
        </section>
        </div>
    )
}

export default ProductDetail
