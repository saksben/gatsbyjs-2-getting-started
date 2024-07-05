import * as React from "react";
import * as styles from "./404.module.scss"
import Layout from "../components/layout";

export default () => (
  <Layout className={styles.content}>
    <h1 className={styles.header}>Page not found</h1>
    <p className={styles.errorMessage}>The page you are looking for does not exist</p>
  </Layout>
);
