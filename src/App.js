import { ThemeContext } from "./contexts/ThemeContext";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useState } from "react";
import Nav from "./Nav";

function App() {
  const [theme, setTheme] = useState({
    darkMode: false,
    light: "#fff",
    dark: "#333",
  });
  /*
  
*/

  const styles = {
    main: css`
      margin-left: 320px;
      padding: 40px 0 0 0;
    `,
    darkModeWrapper: css`
      height: 3000px;
      margin: -30px 0 0 0;
    `,
    footWrapper: css`
      border-top: 4px solid ${theme.darkMode ? "#fff" : "#111"};
      margin-left: -80px;
      padding-left: 80px;
    `,
    themeButton: css`
      margin: 20px 0 20px 0;
      padding: 0 10px 0 10px;
      width: 200px;
      height: 50px;
      font-size: 16px;
      font-weight: 500;
      border: 4px solid ${theme.darkMode ? "#fff" : "#111"};
      background-color: ${theme.darkMode ? "#111" : "#fff"};
      color: ${theme.darkMode ? "#fff" : "#111"};
      cursor: pointer;

      :hover {
        background-color: rgb(0, 151, 18);
      }
    `,
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        css={styles.darkModeWrapper}
        className={theme.darkMode ? "dark-mode" : ""}
      >
        <header className="header">
          <Nav />
        </header>
        <main css={styles.main} className="content">
          <Outlet />
          <div css={styles.footWrapper}>
            <Footer />
            <button
              css={styles.themeButton}
              onClick={() => {
                setTheme({ darkMode: !theme.darkMode });
                console.log(theme);
              }}
            >
              Skift farvetema
            </button>
            <p>55381956</p>
          </div>
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
