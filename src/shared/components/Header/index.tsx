import React from "react";

import styles from "./styles.module.scss";

const Header: React.FC = () => {
  return (
    <div className={styles.wrapperContainer}>
      <div className={styles.container}>
        <strong>
          heroes<span>fi</span>
        </strong>
      </div>
    </div>
  );
};

export default Header;
