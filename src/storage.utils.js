const STORAGE_KEY = "pinyin-data";

export function getNotesFromStorage() {
  const rawData = localStorage.getItem(STORAGE_KEY);
  let parsedData = [];

  try {
    const res = JSON.parse(rawData);

    parsedData = Array.isArray(res) ? res : [];
  } catch {}

  return parsedData;
}

export function storeNotesToStorage(notes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

export function addNoteToStorage(text) {
  const notes = getNotesFromStorage();

  notes.unshift(text);

  storeNotesToStorage(notes);
}

export function updateNote(index, text) {
  const notes = getNotesFromStorage();

  notes[index] = text;

  storeNotesToStorage(notes);
}


export function removeNote(index) {
  const notes = getNotesFromStorage();

  notes.splice(index, 1);

  storeNotesToStorage(notes);
}