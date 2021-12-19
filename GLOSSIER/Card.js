import React from "react";

export default function Card({name,image ,price}) {
  return (
    <div class="col-lg-3 col-md-4 col-sm-6">
        <div class="card">
          <img class="card-img-top" src={image} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text"> ${price}</p>
            
          </div>
        </div>
      </div>
  );
}
