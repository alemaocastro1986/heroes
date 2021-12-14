import React from "react";

import {
  GrLinkedinOption,
  GrInstagram,
  GrFacebookOption,
  GrGithub,
} from "react-icons/gr";

import styles from "./styles.module.scss";

const Header: React.FC = () => {
  return (
    <div className={styles.wrapperContainer}>
      <div className={styles.container}>
        <strong>
          <a href="/">
            heroes<span>fi</span>
          </a>
        </strong>
        <div className={styles.sci}>
          <a
            href="https://www.facebook.com/acunhacastro"
            target="_blank"
            rel="noreferrer"
          >
            <GrFacebookOption size={24} />
          </a>
          <a
            href="https://www.instagram.com/alemaocunha"
            target="_blank"
            rel="noreferrer"
          >
            <GrInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/andrius-cunha-castro"
            target="_blank"
            rel="noreferrer"
          >
            <GrLinkedinOption size={24} />
          </a>
          <a
            href="https://github.com/alemaocastro1986"
            target="_blank"
            rel="noreferrer"
          >
            <GrGithub size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
