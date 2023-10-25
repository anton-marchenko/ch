import "./Menu.css";

function Menu({ notes, setNoteIndex, setMenuOpen, createNewNote, removeNote }) {
  return (
    <div class="menu">
      <div>MENU</div>
      <div
        class="menu-item"
        onClick={() => {
          createNewNote("New note");
          setMenuOpen(false);
        }}
      >
        <button>Create new note</button>
      </div>
      {notes().map((itemText, index) => (
        <div class="menu-item">
          <span
            class="menu-text"
            onClick={() => {
              setNoteIndex(index);
              setMenuOpen(false);
            }}
          >
            {itemText}
          </span>
          <button class="delete-button" onClick={() => removeNote(index)}>
            🗙
          </button>
        </div>
      ))}
    </div>
  );
}

export default Menu;
