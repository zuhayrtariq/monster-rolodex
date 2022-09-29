import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Cardlist from './components/card-list/card-list-component';

class App extends Component {
  constructor()
  {
    super();
    this.state = {
    monsters : [],
    searchField : '',
    };
  }

  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => {return res.json()} )
    .then((users) => {this.setState(() =>
      {
        return {monsters : users}
      },() =>
      {
        // console.log(this.state)
      })
    })
  }

onSearchChange =(event) => {
  console.log(event.target.value);
  const searchField = event.target.value.toLowerCase();
  // const filteredMonsters = monsters.filter((monster) => 
  // {
  //   const searchString = event.target.value.toLowerCase();
  //   return monster.name.toLowerCase().includes(searchString);
  // });
  this.setState(() =>
  {
    return {      searchField  };
  })
}

render()
{
  const { monsters, searchField} = this.state;
  const {onSearchChange} = this;
  const filteredMonsters = monsters.filter((monster) => 
        {
      //    const searchString = event.target.value.toLowerCase();
          return monster.name.toLowerCase().includes(searchField);
        });

  return (
    <div className="App">
      <input type="search" placeholder='Search Monsters' onChange={onSearchChange}
      />
      {
        filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
            <h1>{monster.name}</h1>
            </div>
        )
        })
      }
      <Cardlist />
    </div>
  );
}
}

export default App;
