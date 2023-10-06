import { Container } from 'react-bootstrap';
import { useState } from 'react';
import './App.css';
import NavBar from "./Components/Navbar";
import Header from './Components/Header';
import Category from './Components/Category';
import Cards from './Components/Cards';
import { Data } from './Components/Data';
function App() {
  const [data, setData] = useState(Data)
  const getAllCategory = ["All",...new Set(data.map(i => i.category))]
  const filterByCategory = (cat) => {
    if (cat ==="All") {
      setData(Data);
      console.log("all")
    }
    else {
      const newArray = data.filter(c => c.category === cat);
      setData(newArray)
    }
  }
  const filterBySearch = (word) => {
    if (word !== "") {
       const newArray = data.filter((c) => c.title === word);
       setData(newArray);
    }
   }

  return (
    <div className="App">
      <NavBar filterBySearch={filterBySearch} />
      <Container>
        <Header />
        <Category
          filterByCategory={filterByCategory}
          allCategory={getAllCategory}
        />
        <Cards data={data} />
      </Container>
    </div>
  );
}

export default App;
