import logo from './logo.svg';
import './App.css';
import DrawerAppBar from './components/AppBar';
import Intro from './components/Intro';
import { CardMedia } from '@mui/material';
import MediaCard from './components/DigitalWork';

function App() {
  return (
    <div className="App">
     <DrawerAppBar />
     <Intro />
     <MediaCard />
    </div>
  );
}

export default App;
