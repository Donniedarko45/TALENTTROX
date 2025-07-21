import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./Componets/Navbaar/Navbaar.jsx";
import Footer from "./Componets/Footer/Footer.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
