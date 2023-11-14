import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList.js';
import ChoresList from './components/ChoresList.js';
import BookList from './components/BookList.js';

function App() {
  return (
    <div className="App">
      <MovieList />
      <ChoresList />
      <div className="similarComponents">
        <MovieList />
        <div style={{border: '1px solid black'}}>
          <BookList />
        </div>
        <HobbyLinks />
      </div>
    </div>
  );
}

export default App;
