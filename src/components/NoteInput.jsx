import React from "react";

function NoteInput({
  currentTitle,
  setCurrentTitle,
  currentContent,
  setCurrentContent,
  addNote,
}) {
  return (
    <div className="note-input-container">
      <input
        type="text"
        value={currentTitle}
        onChange={(e) => setCurrentTitle(e.target.value)}
        placeholder="Title..."
      />
      <textarea
        value={currentContent}
        onChange={(e) => setCurrentContent(e.target.value)}
        placeholder="Take a note..."
      />
      <button onClick={addNote}>Add</button>
    </div>
  );
}

export default NoteInput;
