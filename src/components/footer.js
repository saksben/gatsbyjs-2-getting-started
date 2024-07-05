import React from "react";
import * as styles from "./footer.module.scss";

export default ({ children }) => (
  <footer className={styles.container}>
    <div className={styles.footer}>{children}</div>
  </footer>
);
