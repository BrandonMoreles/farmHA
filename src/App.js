import './App.css';
import { Header } from './Components/Header';
import Carousel from './Components/Carousel';
import Image1 from "../src/Images/image1.jpg"
import Image2 from "../src/Images/images2.jpeg"
import { Inicio } from './Components/Inicio';
import { Footer } from './Components/Footer';
function App() {
  var images=[
    Image1,Image2
  ]
  return (
    <div className="App">
      <Header/>
      <Carousel images={images}/>
      <Inicio/>
      <Footer/>
    </div>
  );
}

export default App;
