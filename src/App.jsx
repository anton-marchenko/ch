import { createSignal } from "solid-js";
import NotePage from "./NotePage/NotePage";
import "./App.css";

const customerData = [
  {
    text: "切的图标集 由",
  },
  {
    text: "切的图\n标集 由切的\n图标集 由切的图\n标集 由",
  },
];

localStorage.setItem("pinyin-data", JSON.stringify(customerData));

function App() {
  const [menuToggle, setMenuOpen] = createSignal(false);
  const [noteText, setNoteText] = createSignal("");

  const rawData = localStorage.getItem("pinyin-data");
  const parsedData = rawData ? JSON.parse(rawData) : [];

  return (
    <>
      <div class="menu-button" onClick={() => setMenuOpen(!menuToggle())}>
        M
      </div>
      {menuToggle() ? (
        <div class="menu">
          <div>MENU</div>
          {parsedData.map((item) => (
            <div
              class="menu-item"
              onClick={() => {
                setNoteText(item.text);
                setMenuOpen(false);
              }}
            >
              {item.text}
            </div>
          ))}
        </div>
      ) : null}
      <NotePage noteText={noteText} setNoteText={setNoteText}></NotePage>
    </>
  );
}

export default App;
