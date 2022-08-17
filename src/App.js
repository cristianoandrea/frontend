import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages';
import SignInPage from './pages/signin';

function App() {
  return (
    <Router >
      <Routes>
        <Route path='/' caseSensitive={false} element={<Home />} />
        <Route path='/signin' caseSensitive={false} element={<SignInPage />} />
      </Routes>
      
    </Router>
  );
}

export default App;
