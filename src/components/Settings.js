import { ThemeContext } from "./contexts/ThemeContext";
import { useState } from "react";

const Settings = () => {
  const [theme, setTheme] = useState({
    darkMode: false,
    light: "#fff",
    dark: "#333",
  });

  return (
    <div>
      <h1>Indstillinger</h1>
      <section>
        <h2>Mørkt eller lyst tema</h2>
        <button
          css={styles.themeButton}
          onClick={() => {
            setTheme({ darkMode: !theme.darkMode });
            console.log(theme);
          }}
        >
          Skift farvetema
        </button>
      </section>
      <section>
        <p>55381956</p>
      </section>
    </div>
  );
};

export default Settings;
