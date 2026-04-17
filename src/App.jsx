import TemperaturePage from "./components/TemperaturePage";
import ThemeButton from "./components/ThemeButton";
import ThemeDisplay from "./components/ThemeDisplay";
import { useTheme } from "./components/ThemeContext";

export default function App() {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <h1>Temperature Converter</h1>

      <ThemeButton />
      <ThemeDisplay />
      <TemperaturePage />
    </div>
  );
}