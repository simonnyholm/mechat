import { Link } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

const Nav = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <nav css={styles.headerDiv}>
        <div>
          <Link to="/">
            <img src="" alt="" />
          </Link>
        </div>
        <div css={styles.menu} className="menu">
          <Link to="/search">Søg</Link>
          <Link to="/chat">Chat</Link>
          <Link to="/food">Mad</Link>
          <Link to="/settings">Indstillinger</Link>
          <Link to="/donotclick">Tryk ikke her!</Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
