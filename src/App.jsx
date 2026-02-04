import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Solutions from './pages/Solutions/Solutions';
import Industries from './pages/Industries/Industries';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/industries" element={<Industries />} />
            {/* Additional routes will be added as we build pages */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


