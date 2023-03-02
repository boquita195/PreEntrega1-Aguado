import './App.css';
import ItemListContainer from './Components/Items/ItemListContainer';
import NavBar from './Components/Navbar/NavBar';


function App() {
  return (
    <div className="App">
  <NavBar />
  <ItemListContainer greeting={'Bienvenidos!'} />
   </div> );
}

export default App;
