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
          <Footer />
          <button
            onClick={() => {
              setTheme({ darkMode: !theme.darkMode });
              console.log(theme);
            }}
          >
            Skift farvetema
          </button>
          <p>55381956</p>
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
