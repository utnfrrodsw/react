import { useTheme } from "./hooks/useTheme";
import './MainContent.css'

function MainContent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={theme}>
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "dark" : "light"} theme
      </button>
    </div>
  );
}

export default MainContent;