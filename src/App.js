
import { Children } from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import { GlobalStyles } from './styles/GlobalStyles';
import Home from './Pages/Home/Home';


function App() {
  return (
    <>
      
      <Navbar />
      <Home />
      <Footer />
    </>

  );
}

export default App;
