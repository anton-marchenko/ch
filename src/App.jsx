import { createSignal } from "solid-js";
import NotePage from "./NotePage/NotePage";
import "./App.css";

function App() {
  const [menuToggle, setMenuOpen] = createSignal(false);

  return (
    <>
    <div class="menu-button" onClick={() => setMenuOpen(!menuToggle())}>M</div>
    {menuToggle() ? <div class="menu">MENU <div>item1</div></div> : null}
    <NotePage noteId="1"></NotePage></>
  );
}

export default App;
