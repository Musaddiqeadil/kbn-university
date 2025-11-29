import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components (optional for now)
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";

// Pages
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Gallery from "./pages/gallery/Gallery.jsx";
import Acadmic from "./pages/acadmic/Acadmic.jsx";
import Courses from "./pages/courses/Courses.jsx";
import Admission from "./pages/admission/Admission.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Events from "./pages/events/Events.jsx";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/academics" element={<Acadmic />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/admissions" element={<Admission />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
