import { useTheme } from './useTheme';

export default function ThemeComponent() {
  const { theme, toggle } = useTheme();
  return (
    <>
      <p>Tema actual aplicado: {theme}</p>
      <button onClick={toggle}>Toggle</button>
    </>
  );
}
