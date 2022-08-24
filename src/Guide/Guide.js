import './Guide.scss';
import Dropdown from './Dropdown/Dropdown';
import DateDropdown from './Dropdown/DateDropdown';

function Guide() {
  const ExampleContent1 = [
    {
      title: 'Artdefinance laps gallery curation',
      index: '1',
    },
    {
      title: 'Art de finance gallery',
      index: '2',
    },
    {
      title: 'Art de finance gallery',
      index: '3',
    },
    {
      title: 'Art de finance gallery',
      index: '4',
    },
  ];
  const ExampleContent2 = [
    {
      title: 'Sort by ending soon',
      index: '1',
    },
    {
      title: 'Sort by recently active',
      index: '2',
    },
    {
      title: 'Sort by newest',
      index: '3',
    },
    {
      title: 'Sort by oldest',
      index: '4',
    },
  ];
  return (
    <div className="guide">
      <div className="dropdown-position">
        <h2>Dropbox Menu</h2>
        <div>
          <Dropdown dropWidth="210px" dropHeight="100%" dropTitle="드롭박스이름" content={ExampleContent1} />
          <Dropdown dropWidth="263px" dropHeight="100%" content={ExampleContent2} />
        </div>
        <DateDropdown dropWidth="415px" />
      </div>
      <div className="bubble-position">
        <h2>말풍선 위치</h2>
        <div className="item">
          <h3>bubble-bottom-center</h3>
          <p className="bubble bubble-bottom-center">This is tooltip content. Seamlessly formulate magnetic methodologies with go forward deliverables. </p>
        </div>
        <div className="item">
          <h3>bubble-right-center</h3>
          <p className="bubble bubble-right-center">This is tooltip content. Seamlessly formulate magnetic methodologies with go forward deliverables.</p>
        </div>
        <div className="item">
          <h3>bubble-bottom-left</h3>
          <p className="bubble bubble-bottom-left">This is tooltip content. Seamlessly formulate magnetic methodologies with go forward deliverables.</p>
        </div>
        <div className="item">
          <h3>bubble-bottom-right</h3>
          <p className="bubble bubble-bottom-right">This is tooltip content. Seamlessly formulate magnetic methodologies with go forward deliverables.</p>
        </div>
        <div className="item">
          <h3>bubble-top-center</h3>
          <p className="bubble bubble-top-center">This is tooltip content. Seamlessly formulate magnetic methodologies with go forward deliverables.</p>
        </div>
        <div className="item">
          <h3>bubble-left-center</h3>
          <p className="bubble bubble-left-center">his is tooltip content. Seamlessly formulate magnetic methodologies with go forward deliverables.</p>
        </div>
        <div className="item">
          <h3>bubble-top-left</h3>
          <p className="bubble bubble-top-left">This is tooltip content. Seamlessly formulate magnetic methodologies with go forward deliverables.</p>
        </div>
        <div className="item">
          <h3>bubble-top-right</h3>
          <p className="bubble bubble-top-right">This is tooltip content. Seamlessly formulate magnetic methodologies with go forward deliverables.</p>
        </div>
      </div>
    </div>
  );
}

export default Guide;
