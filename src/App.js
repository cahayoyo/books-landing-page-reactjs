import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Javascript from './components/Javascript'
import Reactjs from './components/Reactjs';
import './style/landingPage.css'

function App() {
  return (
    <div>
      <div className='myBG'>
        <NavigationBar />
        <Intro />
      </div>
      
      <div className='javascript'>
        <Javascript />
      </div>

      <div className='reactjs'>
        <Reactjs />
      </div>
    </div>
  );
}

export default App;
