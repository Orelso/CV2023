import DrawerAppBar from "./components/AppBar";

import { navItems } from "./components/navItems";

function App() {
  return (
    <div className="App">
      <DrawerAppBar />
      {navItems.map(({ Component, title, elementId }) => (
        <div key={title} id={elementId}>
          {Component}
        </div>
      ))}
    </div>
  );
}

export default App;
