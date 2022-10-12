import { Link } from 'react-router-dom';
import './Path.scss';

function Path() {
  const list = [
    ['arte components', '-', '/artecomponents'],
    ['Main', 'Main', '/main'],
    ['ArtDao', 'Token Swap', '/art-dao/token-swap'],
    ['', 'DAO Voting', '/art-dao/dao-voting'],
    ['', 'DAO Voting - Detail', '/art-dao/dao-voting/detail'],
    ['', 'DAO Voting - Detail - Modal 1', '/art-dao/dao-voting/detail-modal-1'],
    ['', 'DAO Voting - Detail - Curation Results', '/art-dao/dao-voting/curation-results'],
    ['', 'DAO Voting - Results', '/art-dao/dao-voting/results'],
    ['', 'DAO Voting - Detail - Modal 2', '/art-dao/dao-voting/detail-modal-2'],
    ['Market Place', 'Digital Art 1', '/marketplace/digital-art-1'],
    ['', 'Digital Art 2', '/marketplace/digital-art-2'],
    ['', 'Digital Art 3', '/marketplace/digital-art-3'],
    ['', 'Market Place', '/marketplace'],
    ['', 'Auction 1', '/marketplace/auction-1'],
    ['', 'Auction 1 (종료)', '/marketplace/auction-1-end'],
    ['', 'Auction 2/3', '/marketplace/auction-2-3'],
    ['', 'Fixed Price 1', '/marketplace/fixed-price-1'],
    ['', 'Fixed Price 2', '/marketplace/fixed-price-2'],
    ['', 'Listing 1', '/marketplace/listing-1'],
    ['', 'Listing 1 Modal', '/marketplace/listing-1-modal'],
    ['', 'Listing 2', '/marketplace/listing-2'],
    ['', 'Auction 4', '/marketplace/auction-4'],
    ['', 'Auction 4 Modal', '/marketplace/auction-4-modal'],
    ['Collection', 'Item', '/collection/item'],
    ['', 'Item Empty', '/collection/item-empty'],
    ['', 'Activity', '/collection/activity'],
    ['Personal Collected', 'Collections', '/personal-collected/collections'],
    ['', 'Owned', '/personal-collected/owned'],
    ['', 'Favorited', '/personal-collected/favorited'],
    ['', 'Activity', '/personal-collected/activity'],
    ['', 'Owned Empty + 프로필 레이어', '/personal-collected/owned-empty'],
    ['', 'Profile Setting Modal', '/personal-collected/profile-setting-modal'],
    ['Create', 'Create Item 1', '/create/create-item-1'],
    ['', 'Create Item 2', '/create/create-item-2'],
    ['', 'Create Item Modal', '/create/create-item-modal'],
    ['', 'Edit Item 1', '/create/edit-item-1'],
    ['', 'Create Collection 1', '/create/create-collection-1'],
    ['', 'Create Collection 2', '/create/create-collection-2'],
    ['Artworks', 'Artworks 1', '/marketplace/artworks-1'],
    ['', 'Artworks 2', '/marketplace/artworks-2'],
    ['', 'Artworks 3', '/marketplace/artworks-3'],
    ['', 'Artworks Auction 1', '/marketplace/artworks-auction-1'],
    ['', 'Artworks Auction 1 Modal', '/marketplace/artworks-auction-1-modal'],
    ['', 'Artworks Auction 2', '/marketplace/artworks-auction-2'],
    ['', 'Artworks Auction 2 Modal', '/marketplace/artworks-auction-2-modal'],
    ['', 'Artworks Auction 3', '/marketplace/artworks-auction-3'],
    ['', 'Artworks Modal', '/marketplace/artworks-modal'],
  ];

  return (
    <div>
      <div className="pathGuide">
        <table className="pathtable">
          <thead>
            <tr>
              <th>depth1</th>
              <th>depth2</th>
              <th>path</th>
            </tr>
          </thead>
          <tbody>
            {list.map(([depth1, depth2, path], index) => (
              <tr key={`${depth1}-${index.toString()}`}>
                <td>{depth1}</td>
                <td>{depth2}</td>
                <td>
                  <Link to={path}>{path}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Path;
