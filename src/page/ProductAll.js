import React, {useEffect, useState} from "react";
import ProductCard from "../component/ProductCard";
import {Col, Container, Row} from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {

  const [productList, setProductList] = useState([]);
  const [query,setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery=query.get('q')||query.get('category')||""; // 쿼리값이 있으면 q쿼리의 값을, 없으면 빈 스트링을 반환
    console.log("쿼리값",searchQuery);
    let categoryQuery=query.get('category')||"";
    console.log("항목쿼리",categoryQuery);
    let url;
    if(searchQuery!==""){
      console.log("search");
      url = `https://my-json-server.typicode.com/bmbx08/hnmshoppingsite/products?q=${searchQuery}`; //q=~를 붙이면 자동으로 검색하는 것은 json-server에서 제공하는 기능
    } else if(categoryQuery!==""){
      console.log("category");
      url = `https://my-json-server.typicode.com/bmbx08/hnmshoppingsite/products?category_like=${categoryQuery}`;
    } else{
      url = `https://my-json-server.typicode.com/bmbx08/hnmshoppingsite/products?category_like=${categoryQuery}`;
    }
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    console.log(data);
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col className="column" lg={3} md={6} sm={12}>
              <ProductCard item={menu}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
