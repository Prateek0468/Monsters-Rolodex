import { Component, useEffect, useState } from "react";

import CardList from "./components/card-list/CardList.jsx";
import SearchBox from "./components/search-box/SearchBox.jsx";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonster] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((val) =>
    val.name.toLowerCase().includes(searchField)
  );

  setFilteredMonster(newFilteredMonsters);
  }, [monsters, searchField]);


  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();

    setSearchField(searchFieldString);
  };

  
  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search Monsters"
        className="search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// };
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   // we wanna get the data as soon as the page is mounted/rendered
//   // happens only one time. as soon as component is placed on the DOM
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();

//     // below is a shorthand to update state. Just make sure that the key and value is same.
//     this.setState({ searchField });
//     // setState doesn't always have to be a callback. It can be done as below as well
//     // this.setState({ monsters: filtered });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((val) =>
//       val.name.toLowerCase().includes(searchField)
//     );

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder="Search Monsters"
//           className="search-box"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
