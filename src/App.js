import Navigation from './components/Navigation';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import '../src/index.css';

function App() {
  return (
    
    <div className="App">
      <Navigation/>
      <Home/>
      <SocialLinks/>
      <About/>
    </div>
  );
}

export default App;

