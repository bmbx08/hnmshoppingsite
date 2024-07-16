import React, {useEffect, useState} from "react";
import ProductCard from "../component/ProductCard";
import {Col, Container, Row} from "react-bootstrap";

const ProductAll = ({authenticate}) => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    let url = `http://localhost:5000/products`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3}>
              <ProductCard item={menu} authenticate={authenticate}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
