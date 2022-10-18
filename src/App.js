
import './assets/css/App.css';
import NavBar from './components/NavBar';
import WeatherPanel from './components/WeatherPanel';



function App() {
  return (
    <div className="App">
      <h1>MI APLICACION CLIMÁTICA</h1>
      <NavBar />
      <WeatherPanel />
      
    </div>
  );
}

export default App;
