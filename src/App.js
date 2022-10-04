import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Layout/Footer';
import Header from './Components/Layout/Header';
import Path from './Path';
import Main from './Main';
import TokenSwap from './ArtDao/TokenSwap';
import DAOVoting from './ArtDao/DAOVoting';
import DAOVotingDetail01 from './ArtDao/DAOVoting/Detail01';
import DAOVotingDetail02 from './ArtDao/DAOVoting/Detail02';
import ArteComponents from './ArteComponent/Components';
import MarketPlace from './MarketPlace/MarketPlace';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/artecomponents" element={<ArteComponents />} />
          <Route path="/path" element={<Path />} />
          <Route path="/main" element={<Main />} />
          <Route path="/art-dao/token-swap" element={<TokenSwap />} />
          <Route path="/art-dao/dao-voting" element={<DAOVoting />} />
          <Route path="/art-dao/dao-voting/detail01" element={<DAOVotingDetail01 />} />
          <Route path="/art-dao/dao-voting/detail02" element={<DAOVotingDetail02 />} />
          <Route path="/marketplace" element={<MarketPlace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
