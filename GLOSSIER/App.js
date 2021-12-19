import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import Navbar from "./comp/Navbar";
import Footer from "./comp/Footer";
import Card from "./comp/Card";
import { useEffect, useState } from "react";
import { axios } from "axios";
import { Link } from "react-router-dom";

function App() {
  const [data, setData] = useState();
  const getData = async () => {
    fetch("http://localhost:4001/products")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));

    console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Navbar />
      <div className="Poster">
        <img
          width="50%"
          height="50%"
          src="https://images.ctfassets.net/p3w8f4svwgcg/6eLOnofglwgyxu1THCDWOG/69bf0b0c3cfc9b1f9ac20dc3c1ef8234/Essential_Edit_-_1.jpg?w=960&q=80&fm=webp"
        />
        <img
          width="50%"
          height="50%"
          src="https://images.ctfassets.net/p3w8f4svwgcg/7A6Dnm17zM3DGxCe59LLuO/2cd76d200f4c60aea4292b7f094bee1b/Essential_Edit_-_2.jpg?w=960&q=80&fm=webp"
        />
      </div>
      {/* https://static-assets.glossier.com/production/spree/images/attachments/000/007/165/portrait_normal/Monochromes-Palette_Brush-main.jpg?1631739429=&w=600&q=80&fm=webp */}
       {/* lakme products */}
      <div className="flex-row">
        <div>
          <div class="card card-width col-xl ">
            <img
              class="card-img-top"
              width="200px"
              height="20%"
              // lakme image
              src="https://images.ctfassets.net/p3w8f4svwgcg/1RBZUHK0czYoegQe0VhdYS/85c943302f7385b5a34d4239cb4b2b6b/Homepage_Skincare_Desktop.jpg?w=960&q=80&fm=webp"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Skin safe Makeup</h5>
              <p class="card-text">
                 Get 20% off
              </p>
              <Link to="makeup" class="btn btn-blue"> Buy Now</Link>
            </div>
          </div>
        </div>
        <div>
          <div class="card card-width col-xls">
            <img
              class="card-img-top"
              width="200px"
              height="20%"
              // lakme poster
              src="https://images.ctfassets.net/p3w8f4svwgcg/2obbpWbGNwudxGStZI1laS/0de235b96db7c075413a1484bf98d862/Beauty_Bag__Makeup_set_6.jpg?w=1400&q=80&fm=webp"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Skin care</h5>
              <p class="card-text">
                Get Great Deals on Skin Care
              </p>
              <Link to="skin" class="btn btn-blue"> Buy Now</Link>

             
             
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <Footer />
    </>
  );
}

export default App;
