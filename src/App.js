import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Layout/Footer';
import Header from './Components/Layout/Header';
import ArteComponents from './ArteComponent/Components';
import MarketPlace from './MarketPlace/MarketPlace';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/guide" element={<ArteComponents />} />
          <Route path="/marketplace" element={<MarketPlace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
