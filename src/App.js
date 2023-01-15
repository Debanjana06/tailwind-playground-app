
import './App.css';
import Car from './Component/Car';
import Card from './Component/Card';
import Cards from './Component/Cards';
import Footer from './Component/Footer';
import Form from './Component/Form';
import Hero from './Component/Hero';
import NavBar from './Component/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Car/>
      <Form/>
      <Card/>
      <Cards/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
