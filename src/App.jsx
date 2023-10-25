import { createSignal } from "solid-js";
import NotePage from "./NotePage/NotePage";
import Menu from "./Menu/Menu";

import "./App.css";
import {
  addNoteToStorage,
  getNotesFromStorage,
  removeNote,
  updateNote,
} from "./storage.utils";

// const customerData = [
//   {
//     text: "切的图标集 由",
//   },
//   {
//     text: "切的图\n标集 由切的\n图标集 由切的图\n标集 由",
//   },
// ];

function App() {
  const [menuToggle, setMenuOpen] = createSignal(false);
  const [notes, setNotes] = createSignal(getNotesFromStorage());
  const [currNoteIndex, setCurrNoteIndex] = createSignal(-1);
  const currNoteText = () => {
    return notes().find((_, index) => currNoteIndex() === index);
  };

  const createNewNote = (text) => {
    setCurrNoteIndex(0);
    addNoteToStorage(text);
    setNotes(getNotesFromStorage());
  };
  const setNoteIndex = (index) => {
    setCurrNoteIndex(index);
  };
  const removeNote1 = (index) => {
    removeNote(index);

    setNotes(getNotesFromStorage());
  };
  const updateNote1 = (index, text) => {
    updateNote(index, text);

    setNotes(getNotesFromStorage());
  };

  return (
    <>
      <div class="menu-button" onClick={() => setMenuOpen(!menuToggle())}>
        {"⯇"}
      </div>
      {menuToggle() ? (
        <Menu
          notes={notes}
          setNoteIndex={setNoteIndex}
          createNewNote={createNewNote}
          removeNote={removeNote1}
          setMenuOpen={setMenuOpen}
        ></Menu>
      ) : null}
      {currNoteIndex() >= 0 ? (
        <NotePage
          noteText={currNoteText}
          setNoteText={(text) => updateNote1(currNoteIndex(), text)}
        ></NotePage>
      ) : (
        <button class="new-n-btn" onClick={() => createNewNote("New note")}>
          Create new note
        </button>
      )}
    </>
  );
}

export default App;
