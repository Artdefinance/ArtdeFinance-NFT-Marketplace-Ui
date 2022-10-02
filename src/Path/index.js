import { Link } from 'react-router-dom';
import './Path.scss';

function Path() {
  const list = [
    ['arte components', '-', '/artecomponents'],
    ['Main', 'Main', '/main'],
    ['ArtDao', 'Token Swap', '/art-dao/token-swap'],
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
