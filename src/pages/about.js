import * as React from "react";
import Layout from "../components/layout";
import Title from "../components/title";

export default function About() {
  return (
    <Layout>
      <Title text="About Me" />
      <div>
        <a href="/">Home</a> | <a href="/about">About me</a>
      </div>
      <p>Lorem ipsum etc</p>
    </Layout>
  );
}
