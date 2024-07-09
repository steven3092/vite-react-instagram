import "./App.css";
import { MainContainer } from "./components/main-content/main-container";
import { Sidebar } from "./components/sidebar/sidebar";

function App() {
  return (
    <div className="instagram">
      <Sidebar />
      <MainContainer />
    </div>
  );
}

export default App;
