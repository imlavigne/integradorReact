
import { Children } from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import { GlobalStyles } from './styles/GlobalStyles';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Routes from './routes/Routes';
import Layout from './Layout/Layout';
import Carro from './Carro/Carro';
import { toggleHiddenCarro } from './redux/carro/carroSlice';
import { useDispatch, useSelector } from 'react-redux';


function App() {
 

  return (
  
     <>
      <Navbar />
      <Carro/>
      <Routes/>
      <Footer />
      </>
   

  );
}

export default App;
