import React, {useState} from 'react'
import ProductCard from "./ProductCard";
import products from "@/data/products.json";

const TrendingProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);
  const loadingMoreProducts = () => {
    // setVisibleProducts(visibleProducts + 4);
    setVisibleProducts(prevCount => prevCount + 4);
  }
  return (
    <section className="section__container product__container">
      <h2 className="section__header">Trending Products</h2>
      <p className="section__subheader mb-12">Disover the Hottest Picks: Elevate Your Style with Our Curated Collection of Trending Women's Fashion Products</p>
      <ProductCard products={products.slice(0, visibleProducts)} />
      <div className="product__btn">
        {visibleProducts < products.length && <button className="btn" onClick={loadingMoreProducts}>Load More</button>}
      </div>
    </section>
  )
}

export default TrendingProducts
