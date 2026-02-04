import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Solutions from './pages/Solutions/Solutions';
import Industries from './pages/Industries/Industries';
import CaseStudies from './pages/CaseStudies/CaseStudies';
import Insights from './pages/Insights/Insights';
import ArticlePage from './pages/Insights/ArticlePage';
import ClientsExperience from './pages/ClientsExperience/ClientsExperience';
import Products from './pages/Products/Products';

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
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<ArticlePage />} />
            <Route path="/clients-experience" element={<ClientsExperience />} />
            <Route path="/products" element={<Products />} />
            {/* Additional routes will be added as we build pages */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;




