import React from "react";
import { useParams } from "react-router";
import Footer from "./comp/Footer";
import Navbar from "./comp/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useGlobalState } from "./state/state";
import ProductCard from "./comp/ProductCard";



export default function SkinCare() {
  let { invoiceId } = useParams();
  const [result, setData] = useState();
  const [final, setFinal] = useState();
  const state = useGlobalState();
  const addToCart = (image ,name ,price ) => {
      console.log(image);
      console.log(name);
      console.log(price);
    // const product = {
    //   image ,
    //   name ,
    //   price
    // }
    //  state.merge(product);
    //  console.log(state.get());
     

}
  const getData = async () => {
    const data = await axios.get("http://localhost:4001/products");
    console.log(data.data);

    const meow = data.data.filter((x) => x.cate == "skincare");
    setFinal(meow);
  };
  useEffect(() => {
    getData();
  }, []);
  if (!setFinal) {
    return (
      <>
        <Navbar />
        <h1> Loading...</h1>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Navbar />
      <h1 className="">{invoiceId}</h1>
      <hr/>
      <br/>
      <div class="row">
          {final &&
              final.map(x=>(
                <ProductCard image={x.image} name={x.name} price={x.price} />
              ))
          }
    
   
  </div>
      <Footer />
    </>
  );
}
