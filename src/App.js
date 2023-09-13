
import AboutMe from './components/AboutMe';
import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';
import './index.css';


function App() {
  return (
    
    <div className="App">
      <Navigation/>
      <AboutMe/>
      <div className="section-with-background">
      </div>
      <Portfolio/>
    </div>
  );
}

export default App;

