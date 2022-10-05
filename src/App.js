import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Layout/Footer';
import Header from './Components/Layout/Header';
import Path from './Path';
import Main from './Main';
import TokenSwap from './ArtDao/TokenSwap';
import DAOVoting from './ArtDao/DAOVoting';
import DAOVotingDetail from './ArtDao/DAOVoting/Detail';
import DetailModal1 from './ArtDao/DAOVoting/DetailModal1';
import DAOVotingCurationResults from './ArtDao/DAOVoting/CurationResults';
import DAOVotingResults from './ArtDao/DAOVoting/DAOVotingResults';
import DetailModal2 from './ArtDao/DAOVoting/DetailModal2';
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
          <Route path="/art-dao/dao-voting/detail" element={<DAOVotingDetail />} />
          <Route path="/art-dao/dao-voting/detail-modal-1" element={<DetailModal1 />} />
          <Route path="/art-dao/dao-voting/curation-results" element={<DAOVotingCurationResults />} />
          <Route path="/art-dao/dao-voting/results" element={<DAOVotingResults />} />
          <Route path="/art-dao/dao-voting/detail-modal-2" element={<DetailModal2 />} />
          <Route path="/marketplace" element={<MarketPlace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
