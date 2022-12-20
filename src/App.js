import './App.css';
import ButtomBar from './components/bottomBar/ButtomBar';
import Cover from './components/cover/Cover';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/about/About';
import Blog from './components/blog/Blog';
import Interest from "./components/Interest/Interest"
import Event from "./components/Events/Event";
import Faq from "./components/Faq/Faq"
import Quotes from "./components/Quotes/Quotes"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="App">
          <Routes >
            
            <Route path="/" element={<Cover />} />
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<Blog />} />
            <Route path="/interest" element={<Interest />} />
            <Route path="/events" element={<Event />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/quotes' element={<Quotes />} />
            
          </Routes>
        </div>
      </Router>
      <ButtomBar />
    </>
  );


}

export default App;
