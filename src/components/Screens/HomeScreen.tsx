import React from "react";
import { Row } from "react-bootstrap";
import Products from "../Reusable/Products";
const data = [
  {
    id: 457,
    title: "Matematyka 1. Podręcznik. Zakres podstawowy",
    author: "M. Karpiński, M. Dobrowolska, M. Braun, J. Lech",
    cover_url: "http://localhost:3001/static/cover/book/457.jpg",
    pages: 280,
    price: 3200,
    currency: "PLN",
  },
  {
    id: 458,
    title: "Matematyka 1. Podręcznik. Zakres rozszerzony",
    author: "M. Karpiński, M. Dobrowolska, M. Braun, J. Lech",
    cover_url: "http://localhost:3001/static/cover/book/458.jpg",
    pages: 300,
    price: 3300,
    currency: "PLN",
  },
  {
    id: 905,
    title: "Nowa Matematyka z plusem 5. Podręcznik",
    author: "M. Dobrowolska, M. Jucewicz, M. Karpiński, P. Zarzycki",
    cover_url: "http://localhost:3001/static/cover/book/905.jpg",
    pages: 256,
    price: 2990,
    currency: "PLN",
  },
  {
    id: 1227,
    title: "Język polski 6. Między nami. Podręcznik",
    author: "A. Łuczak, A. Murdzek",
    cover_url: "http://localhost:3001/static/cover/book/1227.jpg",
    pages: 344,
    price: 3230,
    currency: "PLN",
  },
  {
    id: 1228,
    title: "Nowa Matematyka z plusem 6. Podręcznik",
    author: "M. Dobrowolska, M. Jucewicz, M. Karpiński, P. Zarzycki",
    cover_url: "http://localhost:3001/static/cover/book/1228.jpg",
    pages: 268,
    price: 3190,
    currency: "PLN",
  },
  {
    id: 1246,
    title: "Matematyka z plusem 7. Podręcznik",
    author: "praca zbiorowa pod redakcją M. Dobrowolskiej",
    cover_url: "http://localhost:3001/static/cover/book/1246.jpg",
    pages: 336,
    price: 3420,
    currency: "PLN",
  },
  {
    id: 1250,
    title: "Matematyka z plusem 4. Podręcznik",
    author: "M. Dobrowolska, M. Jucewicz, M. Karpiński, P. Zarzycki",
    cover_url: "http://localhost:3001/static/cover/book/1250.jpg",
    pages: 256,
    price: 3190,
    currency: "PLN",
  },
  {
    id: 1269,
    title: "Język polski 4. Między nami. Podręcznik. Nowa szkoła podstawowa",
    author: "A. Łuczak, A. Murdzek, K. Krzemieniewska-Kleban",
    cover_url: "http://localhost:3001/static/cover/book/1269.jpg",
    pages: 352,
    price: 3230,
    currency: "PLN",
  },
  {
    id: 1270,
    title: "Język polski 7. Między nami. Podręcznik. Nowa szkoła podstawowa",
    author: "A. Łuczak, E. Prylińska, A. Suchowierska, R. Maszka",
    cover_url: "http://localhost:3001/static/cover/book/1270.jpg",
    pages: 376,
    price: 3430,
    currency: "PLN",
  },
  {
    id: 1271,
    title: "Historia 4. Podróże w czasie. Podręcznik. Nowa szkoła podstawowa",
    cover_url: "http://localhost:3001/static/cover/book/1271.jpg",
    author: "T. Małkowski",
    pages: 160,
    price: 3050,
    currency: "PLN",
  },
];
const HomeScreen = () => {
  return (
    <Row className="p-3">
      {data.map((p) => (
        <Products
          id={p.id}
          title={p.title}
          cover_url={p.cover_url}
          author={p.author}
          pages={p.pages}
          price={p.price}
          currency={p.currency}
        />
      ))}
    </Row>
  );
};

export default HomeScreen;
