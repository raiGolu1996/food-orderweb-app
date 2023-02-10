import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import About from "./pages/About";
import Contact from './pages/Contact';
//here i have putted {BrowserRouter as Router} using alias 
// so inplace BrowserRouter we can use Router.
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Menu from "./pages/Menu";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;











// import './App.css';
// import Navbar from './component/Navbar';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//     <BrowserRouter>
//     <Navbar />

//      </BrowserRouter>

//     </div>
//   );
// }

// export default App;
