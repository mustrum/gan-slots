import React, {useState, useEffect} from 'react';
import {Grid, Header, Thumb} from "./components";

function App() {
  const [all, setAll] = useState([]);
  const [games, setGames] = useState(all);
  const [current, setCurrent] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);


  useEffect(() => {
    fetch('./api/games.json')
      .then(response => response.json())
      .then(data => {
        setAll(data);
        setGames(data);
      });
  }, []);

  let renders = games.length > 0 ?  games.map((game, i) => {
    return <Thumb {...game} className={!isFiltered && (i === 2 || i === 15) ? 'big-square' : ''} />
  }) : null;

  const changeFilterHandler = (filter) => {
    if(filter === 'all') {
      setGames(all);
      setIsFiltered(false);
      setCurrent(all);
    } else {
      let filtered = all.filter(game => game.type === filter);
      setGames(filtered);
      setIsFiltered(true);
      setCurrent(filtered)
    }
  };

  const searchHandler = (term) => {
    if(term === '') {
      isFiltered ? setGames(current) : setGames(all);
    } else {
      let searched = games.filter(game => game.name.toLowerCase().includes(term));
      setGames(searched);
    }
  };

  return (
    <div className="App">
      <Header changeFilterHandler={changeFilterHandler} searchHandler={searchHandler} />
      <div className="container">
        <Grid>
          {renders}
        </Grid>
      </div>
    </div>
  );
}

export default App;
