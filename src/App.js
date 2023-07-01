import "./App.css";

import Text from "./components/Text";
import Theme from "./components/Theme";
import Playlist from "./components/Playlist";

function App() {
  return (
    <div className="app">
      <Text size={32} className="title">
        Umadaara
      </Text>
      <Playlist />
      <Theme />
    </div>
  );
}

export default App;
