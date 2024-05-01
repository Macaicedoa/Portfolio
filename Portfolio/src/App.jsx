import Home from './pages/Home'
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {

  return (
    <Router>
      <Routes>
        <Route path='*' Component={Home}/>
      </Routes>
    </Router>
  )
}

export default App
