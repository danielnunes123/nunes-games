import './App.css';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import Home from './components/pages/Home';
import InfoPage from './InfoPage';

function App() {
  return (
  <Router>
    <Link to="/info/1">Informação 1</Link>
    <Routes>
<Route exact path='/' element={<Home/>}/>
<Route path="/info/:id" element={<InfoPage/>} />
    </Routes>
  </Router>
  );
}

export default App;
