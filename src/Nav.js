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
      justify-content: space-around;

      padding: 30px 0 0 0;

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
      background-color: #b1d0e7;
      top: 0;
      bottom: 0;
    `,
    logoImg: css`
      width: 200px;
    `,
  };

  return (
    <div>
      <nav css={styles.headerDiv}>
        <div>
          <Link to="/">
            <img css={styles.logoImg} src={logo} alt="" />
          </Link>
        </div>
        <div css={styles.menu} className="menu">
          <Link to="/search">Søg</Link>
          <Link to="/chat">Chat</Link>
          <Link to="/food">Mad</Link>
          <Link to="#settings">Indstillinger</Link>
          <Link to="/donotclick">Tryk ikke her!</Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
