import {
  MemoryRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

const Hello = () => {
  const navigate = useNavigate();
  const handleGoToTestClick = () => {
    navigate('/test');
  };

  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <div onClick={handleGoToTestClick} aria-hidden="true">
        go to test page
      </div>
      <div className="Hello">
    </div>
  );
};

const Test = () => {
  return <div>hello</div>;
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}
