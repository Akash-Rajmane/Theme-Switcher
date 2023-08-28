import './App.scss';
import { createContext, useState } from 'react';
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer";
import Content from "./components/content/Content";
import Dropdown from './components/dropdown/Dropdown';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  
  return (
  <ThemeContext.Provider value={theme}>
    <Header/>
    <Content/>
    <Dropdown
        optionsArr={['dark', 'light','colorful']}
        selected={theme}
        setSelected={setTheme}
      />
    <Footer/>
  </ThemeContext.Provider>
  );
}

export default App;
