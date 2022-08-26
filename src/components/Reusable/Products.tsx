import React from "react";
import { Button, Card, Col } from "react-bootstrap";

type Book = {
  id: number;
  title: string;
  cover_url: string;
  author: string;
  pages: number;
  price: number;
  currency: string;
};

const Products = ({
  id,
  title,
  cover_url,
  author,
  pages,
  price,
  currency,
}: Book) => {
  return (
    <Col sm={12} md={6} lg={4} xl={3} key={id}>
      <Card className="my-5 p-3">
        <Card.Img src={cover_url}></Card.Img>
        <Card.Body>
          <Card.Title as="h5">{`${title}`}</Card.Title>
          <Card.Text>{`Author: ${author}`}</Card.Text>
          <Card.Text>{`Pages: ${pages}`}</Card.Text>
          <Card.Text>{`Price: ${currency} ${price}`}</Card.Text>
          <Button>Add to Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Products;
