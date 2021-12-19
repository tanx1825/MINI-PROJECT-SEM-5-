import React from "react";

import { useGlobalState } from "../state/state";
export default function ProductCard({image , name ,price}) {
    const state = useGlobalState();

    const addToCart = async (image, name , price) => {
     const product = {
      image ,
      name ,
      price
    }
     state.merge(product);
     console.log(state.get().value);
    }
    
  return (
      <div class="col-lg-3 col-md-4 col-sm-6">
        <div class="card">
          <img class="card-img-top" src={image} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text"> ${price}</p>
            <button
              href="#"
              class="btn btn-dark"
              onClick={() => addToCart(image, name, price)}
            >
              {" "}
              Buy Now
            </button>
          </div>
        </div>
      </div>
  );
}
