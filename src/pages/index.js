import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Title from "../components/title";

export default function Home() {
  return (
    <Layout>
      <Title text="Welcome" />
      <div>
        <Link to="/">Home</Link> | <Link to="/about">About me</Link>
      </div>
      <p>Lorem ipsum etc</p>
    </Layout>
  );
}
