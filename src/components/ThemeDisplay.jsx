import { useTheme } from "./ThemeContext";

export default function ThemeDisplay() {
  const { theme } = useTheme();

  return <p>Current theme: {theme}</p>;
}
