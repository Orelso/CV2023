
import DrawerAppBar from './components/AppBar';
import Intro from './components/Intro';
import MediaCard from './components/DigitalWork';
import Contact from './components/ContactSection';
import CvReferences from './components/CvRecLetters';

function App() {
  return (
    <div className="App">
     <DrawerAppBar />
     <Intro id="intro"/>
     <MediaCard />
     <CvReferences />
     <Contact />
    </div>
  );
}

export default App;
