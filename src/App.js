import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Compoent1 from './components/Compoent1';
import Compoent2 from './components/Compoent2';
import Compoent3 from './components/Compoent3';

const App = () => {
  return (
    <div className="App">
    <Header/>
    <h1>리엑트라농</h1>
    <Compoent2/>
    <Compoent3/>
    <Footer/>

    </div>
  );
}

export default App;
