import { ThemeProvider } from './contexts/ThemeContext';
import './globals.css';
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  )
}

export default App;
