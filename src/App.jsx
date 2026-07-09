import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Location from './pages/Location';
import Culture from './pages/Culture';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/location/:id" element={<Location />} />
            <Route path="/culture" element={<Culture />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
