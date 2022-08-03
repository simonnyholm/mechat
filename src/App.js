import { ThemeContext } from "./contexts/ThemeContext";
import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function App() {
  const [theme, setTheme] = useState({
    darkMode: false,
    light: "#fff",
    dark: "#333",
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme.darkMode ? "dark-mode" : ""}>
        <div css={styles.page} className="page">
          <header className="header">
            <Nav />
          </header>
          <main className="content">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
