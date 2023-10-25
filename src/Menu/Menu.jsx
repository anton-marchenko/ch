import "./Menu.css";

function Menu({ notes, setNoteText, setMenuOpen, createNewNote }) {
  return (
    <div class="menu">
      <div>MENU</div>
      <div
        class="menu-item"
        onClick={() => {
          createNewNote("444");
          setMenuOpen(false);
        }}
      >
        <button>Create new note</button>
      </div>
      {notes.map((itemText, index) => (
        <div
          class="menu-item"
          onClick={() => {
            setNoteText(itemText);
            setMenuOpen(false);
          }}
        >
          <span class="menu-text">{itemText}</span>
          <button class="delete-button">🗙</button>
        </div>
      ))}
    </div>
  );
}

export default Menu;
