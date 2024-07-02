import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FriendsStory } from "./components/friends-stories/friends-stories";
import { MainContent } from "./components/main-content/main-content";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FriendsStory />
      {<MainContent />}
    </>
  );
}

export default App;
