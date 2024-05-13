import {HashRouter as Router , Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/country/:id' element={<DetailsPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
