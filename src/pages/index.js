import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Title from "../components/title";
import Article from "../components/article";
import ArticleList from "../components/article-list";

export default () => (


    <Layout>
      <Title text="Welcome" />
      {/* <div>
        <Link to="/">Home</Link> | <Link to="/about">About me</Link>
      </div> */}
      <p>Lorem ipsum etc</p>
      {/* <ArticleList /> */}
    </Layout>
  );
