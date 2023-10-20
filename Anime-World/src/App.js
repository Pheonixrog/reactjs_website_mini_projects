
import './App.css';
import Card from './components/Card';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import Card4 from './components/Card4';
import Footer from './components/Footer';
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
function App() {
  return (
    <>
   
    <BrowserRouter>
      <div style={{backgroundColor:'white' }}>
      <Navbar title="Anime-World" heading="Demon-Slayer" heading2="Naruto" heading3="jjk" heading4="One-Piece"    />
      <Routes>
        <Route exact path="/" element={<Card />} />
        <Route exact path="/naruto" element={<Card2 />} />
        <Route exact path="/jjk" element={<Card3 />} />
        <Route exact path="/one-piece" element={<Card4 />} />
      </Routes>
      <Footer />
      </div>
    </BrowserRouter>
    
    


    </>
    
  );
}

export default App;
