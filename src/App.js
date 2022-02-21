import { useEffect, useState } from "react";
import Header from "./components/Header";
import SummaryCard from "./components/SummaryCard";
import DetailCard from "./components/DetailCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import SignUP from "./components/Auth/Signup";
import "./App";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  from,
  HttpLink,
} from "@apollo/client";
import { ErrorLink, onError } from "@apollo/client/link/error";
import Home from "./components/Home";
const link = from([
  ErrorLink,
  new HttpLink({ uri: "https://48p1r2roz4.sse.codesandbox.io" }),
]);
const client = () => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
  });
};
export default function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/SignUP" element={<SignUP />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}
