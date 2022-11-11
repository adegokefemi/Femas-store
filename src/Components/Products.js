import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts }  from "../data";
import Product from "./Product";
import axios from "axios";


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
`

function Products({cat, filters, sort}) {

  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() =>{
    const getProducts = async () => {
      try {
        const res = await axios.get( cat 
          ? `http://localhost:5000/api/products?category=${cat}`
          : "http://localhost:5000/api/products"
        );
       setProducts(res.data);
      } catch (err) {
    
      }
    };
    getProducts();
  },[cat]);

  // The useEffect below set the filterProducts if there is a category e.g coat etc.
  useEffect(() => {
    cat && setFilterProducts(
      products.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );
  },[products, cat, filters]);

  console.log(filterProducts);

  useEffect(() => {
    if (sort === "newest") {
      setFilterProducts((prev) => 
        [...prev].sort((a,b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilterProducts((prev) => 
        [...prev].sort((a,b) => a.price  - b.price)
      );
    } else {
      setFilterProducts((prev) => 
        [...prev].sort((a,b) => b.price  - a.price)
      );
    }
  }, [sort])

  return (
    <Container>
        {cat 
        ? filterProducts.map((item) => (
            <Product item={item} key={item.id}/>)) 
        : products
            .slice(0,2)
            .map((item) => <Product item={item} key={item.id}/>)}
    </Container>
  )
}

export default Products;
