import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import CharacterDetails from './components/CharacterDetails/CharacterDetails';
import CharacterListContainer from "./components/CharacterListContainer/CharacterListContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/characters/' element={<CharacterListContainer/>}/>
        <Route path='/characters/:pageid' element={<CharacterListContainer/>}/>
        <Route path='/character/:id' element={<CharacterDetails/>}/>
        <Route path='*' element={<h1>Not Found</h1>}/>
      </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
