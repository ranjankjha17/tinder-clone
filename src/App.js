//import logo from './logo.svg';
import './App.css';
import Header from './Header'
import TinderCard from './TinderCard';
import SwipeButtons from './SwipeButtons';
function App() {
  return (
    <div className="App">
      {/*<h1>Lets build the mern tender clone</h1>*/}
      
      {/*Header */}
      <Header/>
      {/* tinder card */}
      <TinderCard/>
      
      {/*Swipe Buttons */}
      <SwipeButtons/>

    </div>
  );
}

export default App;
