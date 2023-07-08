import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './semantics/Navbar/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Apart-Hotel" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            {/* <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
