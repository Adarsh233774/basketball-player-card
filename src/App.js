import logo from './logo.svg';
import './App.css';
import BasketballPlayerCard from './components/BasketballPlayerCard';
import lebronImage from './img/download.jpeg';

function App() {
  return (
      <div className="App">
          <BasketballPlayerCard
              name="LeBron James"
              image={lebronImage}
              position="Forward"
              stats={{ pointsPerGame: 25.4, assistsPerGame: 7.1, reboundsPerGame: 10.5 }}
          />
      </div>
  );
}

export default App;
