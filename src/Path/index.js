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
    ['MarketPlace', 'Digital Art 1', '/marketplace/digital-art-1'],
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
