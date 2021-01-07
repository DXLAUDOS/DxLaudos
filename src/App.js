import "./App.scss";
import Logo from "./components/Logo";
import Text from "./components/Text";
import Header from "./containers/header";
import Presentation from "./containers/presentation";

function App() {
  return (
    <div className="App">
      <Header />
      <Presentation />
    </div>
  );
}

export default App;
