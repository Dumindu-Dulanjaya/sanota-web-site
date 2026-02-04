import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Additional routes will be added as we build pages */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
