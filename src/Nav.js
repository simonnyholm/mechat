import { Link } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import logo from "./img/logo.png";

const Nav = () => {
  const { theme } = useContext(ThemeContext);

  const styles = {
    siteHeader: css`
      font-size: 50px;
      padding: 0 0 0 20px;
    `,
    menu: css`
      display: block;

      & a {
        text-decoration: none;
        font-size: 15px;
        font-weight: 400;

        color: ${theme.darkMode ? "#fff" : "#111"};
      }

      & a:hover {
        text-decoration: underline;
      }
    `,
    headerDiv: css`
      position: fixed;

      top: 0;
      bottom: 0;
      border-right: 4px solid ${theme.darkMode ? "#fff" : "#111"};
    `,
    logoImg: css`
      width: 200px;
    `,
    logoDiv: css`
      padding: 20px;
      background-color: rgb(0, 151, 18);
      border-bottom: 4px solid ${theme.darkMode ? "#fff" : "#111"};
    `,
    navDiv: css`
      border-bottom: 4px solid ${theme.darkMode ? "#fff" : "#111"};
      padding: 10px;
    `,
  };

  return (
    <div>
      <nav css={styles.headerDiv}>
        <div css={styles.logoDiv}>
          <Link to="/">
            <img css={styles.logoImg} src={logo} alt="" />
          </Link>
        </div>
        <div css={styles.menu} className="menu">
          <div css={styles.navDiv}>
            <Link to="/search">Søg</Link>
          </div>
          <div css={styles.navDiv}>
            <Link to="/chat">Chat</Link>
          </div>
          <div css={styles.navDiv}>
            <Link to="/food">Mad</Link>
          </div>
          <div css={styles.navDiv}>
            <Link to="#settings">Indstillinger</Link>
          </div>
          <div css={styles.navDiv}>
            <Link to="/donotclick">Tryk ikke her!</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
