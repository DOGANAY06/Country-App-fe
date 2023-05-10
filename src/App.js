
import './App.css';
import Body from './components/body';
import Header, { Alt_Header } from './components/header';

function App() {
  return ( //proje açıldığında dönecek kısım
    <div className="App">
      <Header/>
      <Alt_Header/>
      <Body/>
    </div>
  );
}

export default App;
