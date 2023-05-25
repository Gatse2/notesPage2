import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './Navigation';
import Content from './Content';
import './styles/App.css';

function App() {


  return (
    <Router>
  <div className="wrap">
    <aside>
      <div className='logo'>Logo</div>
      <nav className='navigation'><Navigation/></nav>
    </aside>    
    <main><Content/></main>
  </div>
   </Router>
  );
}

export default App;
