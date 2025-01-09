import { ThemeProvider } from './context/ThemeContext';
import './App.scss';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

function App() {
  return (
    <>
    <div className="app">
    <ThemeProvider>
      <Header/>
      <Main/>
      <Footer/>
    </ThemeProvider>
    </div>
    </>
  );
}

export default App;
