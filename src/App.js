import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Signup from './components/Signup';
import Sneakers from './components/Sneakers';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='Marketplace-Inz/signup' element={<Signup/>}/>
          <Route exact path='Marketplace-Inz/sneakers' element={<Sneakers/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
