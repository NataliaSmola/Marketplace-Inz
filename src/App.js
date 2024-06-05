import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
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
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/sneakers' element={<Sneakers/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
