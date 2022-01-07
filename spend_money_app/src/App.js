import './App.css';
import Money from './components/Money';
import Profile from './components/Profile';
import Item from './components/ItemList/item'
import itemlist from './components/ItemList/itemlist';
import Itemlist from './components/ItemList/itemlist';
import Bill from './components/bill';
function App() {
  return (
    <div className="App">
      <Profile></Profile>
      <Money></Money>
    <Itemlist></Itemlist>
    <Bill></Bill>
    </div>
  );
}

export default App;
