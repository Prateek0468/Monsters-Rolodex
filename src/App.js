import { Component } from "react";

import  CardList  from "./components/card-list/CardList.jsx";
import SearchBox from "./components/search-box/SearchBox.jsx";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  // we wanna get the data as soon as the page is mounted/rendered

  // happens only one time. as soon as component is placed on the DOM
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();

    // below is a shorthand to update state. Just make sure that the key and value is same.
    this.setState({ searchField });
    // setState doesn't always have to be a callback. It can be done as below as well
    // this.setState({ monsters: filtered });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((val) =>
      val.name.toLowerCase().includes(searchField)
    );

    return (
      <div className="App">
      <SearchBox onChangeHandler = {onSearchChange} placeholder = "Search Monsters" className = "search-box"/>
        <CardList monsters = {filteredMonsters} />
      </div>
    );
  }
}

export default App;
