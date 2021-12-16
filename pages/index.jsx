import Commonayout from "../components/common/common.layout";
import Banner from "../components/banner/Banner";
import productData from "../jsons/products.json";
import { useEffect, useState } from "react";
import ProductCard from "../components/Product.card";

const Home = () => {
  const [products, setProducts] = useState([]);
  const tabs = ["Best Seller", "New Arrivals", "Most Popular"];
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    setProducts(productData);
  }, []);
  return (
    <Commonayout>
      <div className="home-wrapper">
        <Banner />
        <div className="tabs p-4 pt-5 my-4 mt-5 d-flex align-items-center gap-5 justify-content-center">
          {tabs.map((tab, i) => (
            <h3
              className={`${activeTab === i && "text-secondary"}`}
              onClick={() => setActiveTab(i)}
              key={i}
            >
              {tab}
            </h3>
          ))}
        </div>
        <div className="products-wrapper px-2 p-lg-3 pt-4 d-flex flex-wrap justify-content-around">
          {products.map((product) => (
            <ProductCard
              p_views={product.product_views}
              key={product.id}
              p_id={product.id}
              p_name={product.name}
              p_price={product.price}
              p_original_price={product.original_price}
              p_photo={product.photo}
              p_hov_photo={product.hovered_photo}
            />
          ))}
        </div>
        <div className="dis-m d-flex align-items-center justify-content-center p-5 my-4">
          <h4 className="discover pointer">DISCOVER MORE</h4>
        </div>
      </div>
    </Commonayout>
  );
};

export default Home;
