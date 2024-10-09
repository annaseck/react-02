import PlayersList from './playerList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Liste des Joueurs</h1>
      <PlayersList />
    </div>
  );
}

export default App;
