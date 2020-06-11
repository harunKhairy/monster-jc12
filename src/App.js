import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

class App extends React.Component {
  
  state = {
    monsters: [],
    searchField: ''
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users}))
  }

  handleChange = (event) => {
    this.setState({searchField: event.target.value})
  }

  render() {
    const { monsters, searchField} = this.state
    const filteredMonsters = monsters.filter(val => 
      val.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return(
      <div className="App">
        <h1>JC 12</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
          />
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}


export default App;
