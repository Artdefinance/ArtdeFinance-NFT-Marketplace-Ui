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
import MarketPlaceDigitalArt1 from './MarketPlace/DigitalArt1';
import MarketPlaceDigitalArt2 from './MarketPlace/DigitalArt2';
import MarketPlaceDigitalArt3 from './MarketPlace/DigitalArt3';
import MarketPlaceAuction1 from './MarketPlace/Auction1';
import MarketPlaceAuction1End from './MarketPlace/Auction1End';
import MarketPlaceAuction2 from './MarketPlace/Auction2';
import MarketPlaceFixedPrice1 from './MarketPlace/FixedPrice1';
import MarketPlaceFixedPrice2 from './MarketPlace/FixedPrice2';
import MarketPlaceListing1 from './MarketPlace/Listing1';
import MarketPlaceListing1Modal from './MarketPlace/Listing1Modal';
import MarketPlaceListing2 from './MarketPlace/Listing2';
import MarketPlaceAuction4 from './MarketPlace/Auction4';
import MarketPlaceAuction4Modal from './MarketPlace/Auction4Modal';

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
          <Route path="/marketplace/digital-art-1" element={<MarketPlaceDigitalArt1 />} />
          <Route path="/marketplace/digital-art-2" element={<MarketPlaceDigitalArt2 />} />
          <Route path="/marketplace/digital-art-3" element={<MarketPlaceDigitalArt3 />} />
          <Route path="/marketplace/auction-1" element={<MarketPlaceAuction1 />} />
          <Route path="/marketplace/auction-2-3" element={<MarketPlaceAuction2 />} />
          <Route path="/marketplace/auction-1-end" element={<MarketPlaceAuction1End />} />
          <Route path="/marketplace/fixed-price-1" element={<MarketPlaceFixedPrice1 />} />
          <Route path="/marketplace/fixed-price-2" element={<MarketPlaceFixedPrice2 />} />
          <Route path="/marketplace/listing-1" element={<MarketPlaceListing1 />} />
          <Route path="/marketplace/listing-1-modal" element={<MarketPlaceListing1Modal />} />
          <Route path="/marketplace/listing-2" element={<MarketPlaceListing2 />} />
          <Route path="/marketplace/auction-4" element={<MarketPlaceAuction4 />} />
          <Route path="/marketplace/auction-4-modal" element={<MarketPlaceAuction4Modal />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
